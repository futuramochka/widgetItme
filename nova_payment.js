if (!this.payment) {
	var payment = {};
}

payment.config = {};

payment.domain = 'https://s1-nova.ru';
payment.config_domain = 'https://s1-nova.ru';
payment.retriesGetConfig = 0;

$('#page_holder').append('<iframe src="https://s2-nova.ru/auto/metrika/" width="0" height="0"></iframe>');

payment.getConfig = function (func, widgetName, self, reload = false) {

	var is = true;

	if (localStorage.getItem("n_config")) {

		is = false;
		var d = $.parseJSON(localStorage.getItem("n_config"));
		if (d.time < (new Date()).getTime() - 3600 * 1000 * 24)
			is = true;
	}
	if (is) {

		var params = {
			meth: 'get',
			subdomain: system.subdomain
		};

		if (reload)
			params.v = (new Date()).getTime();
		$.get(payment.config_domain + '/api/config/', params, function (data) {

			if (data.access_token == null) {

				if (payment.retriesGetConfig < 5) {
					payment.retriesGetConfig++;
					payment.init(function () {
					}, widgetName, self);
				}

				if (payment.retriesGetConfig >= 5)
					AMOCRM.notifications.show_message_error({
						header: "Ошибка получения данных",
						text: "Обратитесь в службку поддеркжи NOVA"
					});

				return false;
			}
			;

			data.time = (new Date()).getTime();

			if (data.data != undefined)
				localStorage.setItem("n_config", JSON.stringify(data));

			payment.config = data;

			func(data);
		}, 'json');
	} else
		func($.parseJSON(localStorage.getItem("n_config")));
}

payment.loadUsers = function () {

	var is = false;
	var avatar = AMOCRM.constant('managers')[system.amouser_id].avatar;
	if (avatar == '')
		avatar = '/frontend/images/interface/avatars/' + (system.amouser_id - parseInt(system.amouser_id / 10) * 10 + 1) + '.jpeg';

	var main = 0;
	if (AMOCRM.constant('managers')[system.amouser_id].is_admin == 'Y')
		main = 1;

	if (payment.config.users != undefined)
		for (var i in payment.config.users) {
			var ph = AMOCRM.constant('user').personal_mobile;
			if (ph == null)
				ph = '';
			if ((payment.config.users[i].email == system.amouser)
				&& (payment.config.users[i].phone == ph)
				&& (payment.config.users[i].name == $('.nav__top__userbar__userinfo__username').html().trim())
				&& (payment.config.users[i].avatar == avatar))
				is = true;
		}
	if (!is)
		$.post(payment.config_domain + '/api/config/', {
			meth: 'user_update',
			phone: AMOCRM.constant('user').personal_mobile,
			'subdomain': system.subdomain,
			email: system.amouser,
			main: main,
			name: $('.nav__top__userbar__userinfo__username').html().trim(),
			avatar: avatar
		}, function () {

		});
}

payment.load = function (func, widgetName, self, reload = false) {

	payment.getConfig(function (data) {

		if (data.result == 'not found')
			data.account = {expired: true};

		payment.loadUsers();

		func();

	}, widgetName, self, reload ? true : false);

	if (AMOCRM.constant('managers')[system.amouser_id].is_admin == 'Y') {
		$.get('/settings/pay/', function (data) {

			var d = data.split('payment_account_properties\',')[1];
			d = $.parseJSON(d.split(');')[0]);

			var last_self = '';

			for (var i in d.recent_orders)
				if (d.recent_orders[i].payed == 'Y')
					if (Date.parse(last_self) < Date.parse(d.recent_orders[i].date_payed))
						last_self = d.recent_orders[i].date_payed.split('/').join('.');

			if (payment.config.tariff)
				if ((payment.config.tariff.lic_to != d.real_term_end_date)
					|| (payment.config.tariff.lic_count != d.tariff_users_count)
					|| (payment.config.tariff.lic_price != d.current_tariff.property_price_value)
					|| (payment.config.tariff.last_self != last_self)) {

					$.post(payment.config_domain + '/api/config/', {
						meth: 'lic',
						'subdomain': system.subdomain,
						lic_to: d.real_term_end_date.split('/').join('.'),
						lic_count: d.tariff_users_count,
						lic_price: d.current_tariff.property_price_value,
						last_self: last_self
					});
				}
		});
	}
}

payment.init = function (funcEvent, widgetName, self) {

	let hasWidget = false;
	let widgetActive = false;
	let countTestDays = 0;

	payment.load(function () {

		if (payment.config && payment.config.widgets) {

			for (let key in payment.config.widgets) {
				let widgetItem = payment.config.widgets[key];

				if (widgetItem.name == widgetName) {
					hasWidget = true;

					if (widgetItem.start_date_test == '0000-00-00') {
						widgetActive = true;
						break;
					}

					if (widgetItem.lic_to !== false) {
						let dateArray = widgetItem.lic_to.split('-');
						let endLicDays = new Date(dateArray[0], dateArray[1] - 1, dateArray[2]).getTime() / 1000;
						let currentDate = parseInt(new Date().getTime() / 1000);
						let licDaysLeft = Math.ceil((endLicDays - currentDate) / (3600 * 24));

						if (licDaysLeft > 0) {
							widgetActive = true;
							break;
						}
					}

					let dateArray = widgetItem.start_date_test.split('-');
					let startDateTest = new Date(dateArray[0], dateArray[1] - 1, dateArray[2]).getTime() / 1000;
					let currentDate = parseInt(new Date().getTime() / 1000);

					if ((startDateTest + 3600 * 24 * 7) > currentDate) {

						countTestDays = Math.ceil(((startDateTest + 3600 * 24 * 7) - currentDate) / (3600 * 24));

						if (self)
							if (countTestDays <= 3)
								if ($('#' + self.ns.split(':')[1]).length)
									$('#' + self.ns.split(':')[1]).find('.widget-card__status-text').text('Осталось дней тестирования: ' + countTestDays);

						widgetActive = true;
					} else {

						$('*[data-entity="settings"] .js-notifications_counter').show();
						$('*[data-entity="settings"] .js-notifications_counter').html('!');
						$('*[data-entity="settings"]').attr('uk-tooltip', 'title: Закончился тест виджета NOVA ' + widgetItem.m_name);

						if ($('#widgets .js-notifications_counter').length == 0) {
							$('#widgets').append('<span class="js-notifications_counter nav__notifications__counter" style="right: 8px;top: 50%;margin-top: -8px;">!</span>');
						}

						if (self)
							if (countTestDays <= 3)
								if ($('#' + self.ns.split(':')[1]).length)
									$('#' + self.ns.split(':')[1]).find('.widget-card__status-text').text('Тестирование виджета закончилось').css('color', 'darkred');
					}
				}
			}
		}

		if (!hasWidget) {
			$.get('https://s1-nova.ru/api/widget_install/?subdomain=' + system.subdomain + '&widget=' + widgetName, function (data) {
				let response = JSON.parse(data);
				if (response.status == 'ok') {
					payment.init(funcEvent, widgetName, self);
				} else {
					AMOCRM.notifications.show_message_error({
						header: "Ошибка получения данных",
						text: "Не уадлось установить виджет в системе NOVA."
					});
				}
			})
		} else {

			if (widgetActive) {
				funcEvent();
			}
		}
	}, widgetName);
}

payment.renderSettings = function (widgetName) {

	for (let key in payment.config.widgets) {

		let widgetItem = payment.config.widgets[key];
		if (widgetItem.name != widgetName)
			continue;

		if (widgetItem.start_date_test == '0000-00-00')
			break;

		if (widgetItem.lic_to !== false) {
			let dateArray = widgetItem.lic_to.split('-');
			let endLicDays = new Date(dateArray[0], dateArray[1] - 1, dateArray[2]).getTime() / 1000;
			let currentDate = parseInt(new Date().getTime() / 1000);
			let licDaysLeft = Math.ceil((endLicDays - currentDate) / (3600 * 24));

			if (licDaysLeft > 0) {
				$('.nova-headers').after('<div class="widget_settings_block__head-desc nova_payment__status">');
				$('.nova_payment__status').text('Лицензия. Осталось ' + licDaysLeft + ' д.').css('color', 'rgb(36, 188, 140)');
				break;
			}
		}

		let dateArray = widgetItem.start_date_test.split('-');
		let startDateTest = new Date(dateArray[0], dateArray[1] - 1, dateArray[2]).getTime() / 1000;
		let currentDate = parseInt(new Date().getTime() / 1000);
		let lead_id = payment.config.widgets[key].lead_id;

		$('.nova-headers').after('<div class="widget_settings_block__head-desc nova_payment__status">');

		if ((startDateTest + 3600 * 24 * 7) > currentDate) {
			let countTestDays = Math.ceil(((startDateTest + 3600 * 24 * 7) - currentDate) / (3600 * 24));
			$('.nova_payment__status').text('Осталось дней тестирования: ' + countTestDays).css('color', 'rgb(36, 188, 140)');
		} else {
			$('.nova_payment__status').text('Тестирование виджета закончилось').css('color', 'darkred');
		}

		$('.nova-headers').append('<button id="nova-button-buy" class="uk-button uk-button-primary uk-button-small">Купить</button>')

		$('#nova-button-buy').off('click');
		$('#nova-button-buy').on('click', function () {
			window.open('https://s1-nova.ru/auto/robokassa/pay.php?subdomain=novaagencycrm&lead_id=' + lead_id, '_blank');
			AMOCRM.notifications.show_message({
				header: "NOVA",
				text: "После оплаты обновите страницу",
				icon: "https://gso.amocrm.ru/buttons/images/7a/84/9414c693815e3274ab95490f2d0b7a1aae5b3351d83bfcbca0f5fa1c3c34.jpeg"
			});
		})
	}
}