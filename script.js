// TODO изменить файлы подключения
define(['jquery', 'lib/components/base/modal', './npl.js', './linked_contacts_market_settings.js', './settings_template.js', './nova_payment.js', './chat.js', './n_uk.js', './linked_contacts.js'], function($,Modal){
	var CustomWidget = function () {

		let widgetName = 'linked_contacts' + '_market';

		var self = this;
		system = self.system(),
			this.callbacks = {
				render: function() {
					var event = new Event("render");
					document.dispatchEvent(event);
					
					if(linked_contacts_market_settings.work === false)
						return false;
					
					return true;
				},
				init: function() {
					if($('link[href="' + self.params.path + '/uikit.css?v=' + self.params.version +'"').length < 1) {
						$('head').append('<link type="text/css" rel="stylesheet" href="' + self.params.path + '/uikit.css?v=' + self.params.version + '" >');
					}
					if($('link[href="' + self.params.path + '/nova_payment.css?v=' + self.params.version +'"').length < 1) {
						$('head').append('<link type="text/css" rel="stylesheet" href="' + self.params.path + '/nova_payment.css?v=' + self.params.version +'" >');
					}
					if($('link[href="' + self.params.path + '/linked_contacts.css?v=' + self.params.version +'"').length < 1) {
						$('head').append('<link type="text/css" rel="stylesheet" href="' + self.params.path + '/linked_contacts.css?v=' + self.params.version +'" >');
					}

					payment.init(function() {

						var event = new Event("init");

						document.dispatchEvent(event);

					}, widgetName, self);
					var novaReady = new Event("nova_ready");
					document.dispatchEvent(novaReady);

					return true;
				},
				bind_actions: function(){
					var event = new Event("bind_actions");
					document.dispatchEvent(event);
 
					return true;
				},
				leads: {
					selected: function() {
						self.widgetsOverlay(false);
						var event = new Event("leads_selected");
						document.dispatchEvent(event);
						
						let objCheckLeads = self.list_selected().selected;
						var arrLeadsCheckedId = [];
						for(i in objCheckLeads) {
							arrLeadsCheckedId[i] = objCheckLeads[i].id;
						}

						console.log(arrLeadsCheckedId);

						var textParams = {
							true: "По выбранным сделкам",
							false: "По всем сделкам"
						}

						var params = {buttonValue: textParams};
						var callback = function (template) {
							var markup = template.render(params);
							console.log(params);
							console.log(markup);
							/*
							* далее код для добавления разметки в DOM
							*/
							viewModal(markup);
							if(modal != undefined)
								n_linked_c.showLinked(arrLeadsCheckedId);
						};
						var s = self.render({
								href: '/templates/button.twig', //путь до шаблона
								base_path: self.params.path, //базовый путь до директории с виджетом
								load: callback //вызов функции обратного вызова произойдет только если шаблон существует и загружен
							},
							params
						); //параметры для шаблона

						function viewModal(callback) {
							modal = new Modal({
								class_name: 'modal-window',
								init: function ($modal_body) {
									var $this = $(this);
									$modal_body
										.trigger('modal:loaded') // запускает отображение модального окна
										.html(callback)
										.trigger('modal:centrify')  // настраивает модальное окно
										.append('');
								},
								preload_templates: [],
								destroy: function () {
								}
							});
							return modal;
						}
					}
				},
				settings: function(){
					var event = new Event("settings");

					linked_contacts_market_settings.showSettings(self.params.widget_code);

					let settings = self.get_settings();
					if (!settings.linked_contacts_market_settings)
						settings.linked_contacts_market_settings = JSON.stringify({"linked_contacts_market_data": 1})
					payment.renderSettings(widgetName);

					document.dispatchEvent(event);
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