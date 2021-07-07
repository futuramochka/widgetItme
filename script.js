// TODO изменить файлы подключения
define(['jquery', 'lib/components/base/modal', './npl.js', './notifications_market_settings.js', './nova_payment.js', './chat.js', './n_uk.js', './notifications_market.js'], function($,Modal){
	var CustomWidget = function () {

		let widgetName = 'notifications' + '_market';

		var self = this;
		system = self.system(),
			this.callbacks = {
				render: function() {
					var event = new Event("render");
					document.dispatchEvent(event);

					$('#page_holder').append('<link type="text/css" rel="stylesheet" href="' + self.params.path + '/uikit.css?v=' + self.params.version + '" >');
					$('#page_holder').append('<link type="text/css" rel="stylesheet" href="' + self.params.path + '/nova_payment.css?v=' + self.params.version +'" >');
					$('#page_holder').append('<link type="text/css" rel="stylesheet" href="' + self.params.path + '/notifications_market.css?v=' + self.params.version + '" >');

					return true;
				},
				init: function() {

					payment.init(function() {

						var event = new Event("init");

						document.dispatchEvent(event);

					}, widgetName, self);

					return true;
				},
				bind_actions: function(){
					var event = new Event("bind_actions");
					document.dispatchEvent(event);
					return true;
				},
				settings: function(){
					var event = new Event("settings");

					notifications_market_settings.showSettings(self.params.widget_code);

					let settings = self.get_settings();
					if (!settings.notifications_market_settings)
						settings.notifications_market_settings = JSON.stringify({"notifications_market_data": 1})

					for (let key in payment.config.widgets) {

						let widgetItem = payment.config.widgets[key];
						if (widgetItem.name != widgetName)
							continue;

						if (widgetItem.start_date_test == '0000-00-00')
							break;

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
						$('#nova-button-buy').on('click', function() {
							window.open('https://s1-nova.ru/auto/robokassa/pay.php?subdomain=novaagencycrm&lead_id=' + lead_id, '_blank');
							AMOCRM.notifications.show_message({
								header: "NOVA",
								text: "После оплаты обновите страницу",
								icon: "https://gso.amocrm.ru/buttons/images/7a/84/9414c693815e3274ab95490f2d0b7a1aae5b3351d83bfcbca0f5fa1c3c34.jpeg"
							});
						})
					}

					document.dispatchEvent(event);
					return true;
				},
				dpSettings: function() {
					var event = new Event("dpSettings");
					document.dispatchEvent(event);

					notifications_market_settings.dp.showSettings(self.params.widget_code);

					let settings = self.get_settings();
					if (!settings.notifications_market_settings)
						settings.notifications_market_settings = JSON.stringify({"notifications_market_data": 1})

					return true;
				},
				onSave: function(){
					var event = new Event("onSave");
					document.dispatchEvent(event);
					return true;
				},

				destroy: function(){
					var event = new Event("destroy");
					document.dispatchEvent(event);
				}
			};
		return this;
	};

	return CustomWidget;
});