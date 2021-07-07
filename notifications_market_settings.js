notifications_market_settings = {};

if (!this.nova_platform_blob)
    var nova_platform_blob = '';

notifications_market_settings.showSettings = function (id) {

    var settingsHTML = 	'<div class="uikit_nova n_rasp_man_view n_rasp_man"> \n' +
							'<div class="nova-headers"> \n' +
							'<div class="nova-headers__title">Уведомления в Telegram</div> \n' +
							'</div><div class="uk-text-meta">' +
                                'Виджет позволяет отправлять настраиваемые уведомления в Telegram как в личный чат, так и в группу. Для получения номера telegram, необходимо написать боту <b><a href=\'tg://resolve?domain=nova_notif_bot\' target=\'_blank\'>@nova_notif_bot</a></b>.' +
                                '<br>' +
                                'Виджет настраиваться как триггер в Digital Pipeline' +
                                '<br>' +
                                '<br>' +
                                '<b>После установки виджета, для его корректной работы, необходимо добавить пользователей и нажать кнопку "Сохранить"</b>' +
                                '<br>' +
                                '<br>' +
                            '</div> \n' +
						'</div>\n' +
                        '<div id="notifications_market_settings" class="uikit_nova" style="padding-right: 20px;">\n' +
							'<table class="uk-table uk-table-divider">\n' +
								'<thead>\n' +
									'<tr>\n' +
										'<th>Пользователь</th>\n' +
										'<th>ФИО</th>\n' +
										'<th>Telegram номер</th>\n' +
                                        '<th></th>\n' +
									'</tr>\n' +
								'</thead>\n' +
								'<tbody>\n' +
								'</tbody>\n' +
							'</table>\n' +
                            '<div class="nova-bottom">\n' +
                                '<div class="uk-button uk-button-primary notifications_market_settings_add uk-margin-small-right" style="float: right;">Добавить</div>\n' +
                                '<div class="notifications_market_settings_save uk-button uk-button-primary">Сохранить</div>' +
                            '</div>\n' +
						'</div>\n' +
                        '<table id="template_table" style="display:none">\n' +
                            '<tr>\n' +
                                '<td>\n' +
                                '<select class="uk-select user" onchange="n_sel();">' +
                                    '<option value="">Не выбрано</option>' +
                                    '</select>\n' +
                                '</td>\n' +
                                '<td><input type="text" value="" class="uk-input name"></td>\n' +
                                '<td><input type="text" value="" class="uk-input tel"></td>\n' +
                                '<td><div class="uk-button uk-button-default uk-button-small" onclick="$(this).parents(\'tr\').remove()">X</div></td>\n' +
                            '</tr>\n' +
                        '</table>\n';

    if (!$('.' + id + ' .widget_settings_block').length)
        return false;

    $('.' + id + ' .widget_settings_block:last').hide().parent().append(settingsHTML);

    notifications_market_settings.load();

    $(document).ready(function () {
        $('body').off('click', '.notifications_market_settings_save');
        $('body').on('click', '.notifications_market_settings_save', function () {
            notifications_market_settings.save();
        })
    })

    $('body').off('click','.notifications_market_settings_add');
    $('body').on('click','.notifications_market_settings_add',function(){
        notifications_market_settings.add();
    });
}

function n_sel() {
    $('#notifications_market_settings tbody tr').each(function(a){
        if(($(this).find('.user').val()!='')&&($(this).find('.name').val()==''))
            $(this).find('.name').val($(this).find('.user option:selected').html());
    })
}

notifications_market_settings.add = function () {

    let jqTableTr = $('#template_table tr');
    $('#notifications_market_settings tbody').append(jqTableTr.last()[0].outerHTML);
}

notifications_market_settings.save = function () {

    var json = [];
    let jqTbodyTr = $('#notifications_market_settings tbody tr');

    for (var i = 0; i < jqTbodyTr.length; i++) {
        var ob = jqTbodyTr.eq(i);
        json.push({
            user: $(ob).find('.user').val(),
            name: $(ob).find('.name').val(),
            tel: $(ob).find('.tel').val(),
            chrome: $(ob).find('.chrome').val()
        });
    }

    let settingsInput = $('[name="notifications_market_settings"]');

    if (settingsInput.val() != JSON.stringify(json)) {
        n_datalib.set('n_notif', JSON.stringify(json));
        settingsInput.val(JSON.stringify(json)).change();
    }

    if (settingsInput.val() == '')
        settingsInput.val('[]');

    $('.js-widget-save').click();

    AMOCRM.notifications.show_message({
        header: "NOVA",
        text: "Сохранено",
        icon: "https://gso.amocrm.ru/buttons/images/7a/84/9414c693815e3274ab95490f2d0b7a1aae5b3351d83bfcbca0f5fa1c3c34.jpeg"
    });
}

notifications_market_settings.load = function () {
    $.get('/api/v2/account', {with: 'users'}, function (data) {

        let jqUser = $('#template_table .user');

        jqUser.html('<option value="">Не выбрано</option>');
        for (let i in data._embedded.users)
            jqUser.append('<option value="' + data._embedded.users[i].id + '">' + data._embedded.users[i].name + '</option>');
        jqUser.append('<option value="extra">Вне амо</option>');

        var set = $('[name="notifications_market_settings"]').val();
        if (set != '')
            set = $.parseJSON(set);
        else
            set = [];

        var tr = $('#template_table tr').last()[0].outerHTML;
        if (Object.keys(set).length > 0)
            $('#notifications_market_settings tbody').html('');
        for (let i in set) {
            if (Object.keys(set).length > 1)
                if (set[i].user == '')
                    continue;

            $('#notifications_market_settings tbody').append(tr);

            let jqTableTr = $('#notifications_market_settings tr');
            jqTableTr.last().find('.user').val(set[i].user);
            jqTableTr.last().find('.name').val(set[i].name);
            jqTableTr.last().find('.tel').val(set[i].tel);
        }
    })
}

notifications_market_settings.dp = {};

notifications_market_settings.dp.showSettings = function (id) {

    var settingsHTML =  '<div class="uikit_nova nova_notif" style="padding-right: 20px;">\n' +
                            '<div class="uk-margin-top">\n' +
                                '<label class="uk-label">Кому</label>\n' +
                                '<select class="uk-select to">\n' +
                                    '<option value="">Ответственному</option>\n' +
                                '</select>\n' +
                            '</div>\n' +
                            '<div class="uk-margin-top">\n' +
                                '<label class="uk-label">Тип отправки</label>\n' +
                                '<select class="uk-select type" disabled>\n' +
                                    '<option value="tel">Telegram</option>\n' +
                                '</select>\n' +
                            '</div>\n' +
                            '<div class="uk-margin-top">\n' +
                                '<label class="uk-label">Дни отправки</label>\n' +
                                '<br>\n' +
                                '<input type="checkbox" class="uk-checkbox" name="dw1"> пн\n' +
                                '<input type="checkbox" class="uk-checkbox" name="dw2"> вт\n' +
                                '<input type="checkbox" class="uk-checkbox" name="dw3"> ср\n' +
                                '<input type="checkbox" class="uk-checkbox" name="dw4"> чт\n' +
                                '<input type="checkbox" class="uk-checkbox" name="dw5"> пт\n' +
                                '<input type="checkbox" class="uk-checkbox" name="dw6"> сб\n' +
                                '<input type="checkbox" class="uk-checkbox" name="dw7"> вс\n' +
                            '</div>\n' +
                            '<div class="uk-margin-top">\n' +
                                '<label class="uk-label">Время отправки</label>\n' +
                                '<input type="text" value="" class="uk-input time">\n' +
                            '</div>\n' +
                            '<div class="uk-margin-top">\n' +
                                '<label class="uk-label">Текст</label>\n' +
                                '<textarea class="uk-textarea text"></textarea>\n' +
                            '</div>\n' +
                            '<div class="uk-margin-top">\n' +
                                '<label class="uk-label">Ключи</label>\n' +
                                '<div class="keys">\n' +
                                    '<a href="">{{lead.id}}</a> - ID сделки<br>\n' +
                                    '<a href="">{{lead.name}}</a> - Название сделки<br>\n' +
                                    '<a href="">{{lead.sale}}</a> - Бюджет сделки<br>\n' +
                                    '<a href="">{{lead.link}}</a> - Ссылка на сделку<br>\n' +
                                    '<a href="">{{lead.cf_НАЗВАНИЕ ПОЛЯ}}</a> - Доп. поле сделки<br>\n' +
                                    '<a href="">{{lead.Ответственный}}</a> - ФИО ответственного менеджера<br>\n' +
                                    '<a href="">{{lead.Товары}}</a> - Список товаров сделки<br>\n' +
                                    '<br>\n' +
                                    '<a href="">{{contact.id}}</a> - ID контакта<br>\n' +
                                    '<a href="">{{contact.name}}</a> - Название контакта<br>\n' +
                                    '<a href="">{{contact.cf_НАЗВАНИЕ ПОЛЯ}}</a> - Доп. поле контакта\n' +
                                    '<br>\n' +
                                    '<a href="">{{last_note}}</a> - Последнее примечание<br>\n' +
                                '</div>\n' +
                            '</div>\n' +
                            '<div class="uk-margin-top">\n' +
                                '<label class="uk-label">Кнопки</label>\n' +
                                '<input type="text" value="" class="uk-input btns">\n' +
                                '<div class="keys">\n' +
                                    'В формате НАЗВАНИЕ КНОПКИ: ссылка; Название кнопки;\n' +
                                    'Например:\n' +
                                    'ОК; Сделка: {{lead.link}}\n' +
                                '</div>\n' +
                            '</div>\n' +
                        '</div>\n';

    if (!$('[data-widget-code="' + id + '"]').find('.widget_settings_block__item_field').length)
        return false;

    $('[data-widget-code="' + id + '"]').find('.widget_settings_block__item_field').hide().parent().append(settingsHTML);

    n_datalib.get('n_notif', function(set_w) {
        if (set_w.data) {
            set_w = JSON.parse(set_w.data);
        }

        $('.nova_notif .to').html('<option value="">Не выбрано</option><option value="otv">Ответственному</option>');
        for (var i in set_w) {
            if (set_w[i].user == "")
                continue;
            $('.nova_notif .to').append('<option value="' + set_w[i].name + '">' + set_w[i].name + '</option>');

            var set = $('*[name="settings"]').val();
            if (set == '') {
                set = {};
                set.to = '';
                set.time = '09-18';
                set.type = 'tel';
                set.dw1 = true;
                set.dw2 = true;
                set.dw3 = true;
                set.dw4 = true;
                set.dw5 = true;
                set.dw6 = false;
                set.dw7 = false;
                set.text = '';
                set.btns = '';
            } else
                set = $.parseJSON(set);
            $('.nova_notif .to').val(set.to);
            $('.nova_notif .type').val(set.type);
            $('.nova_notif .time').val(set.time);
            $('.nova_notif .text').val(set.text);
            $('.nova_notif .btns').val(set.btns);
            $('.nova_notif *[name=dw1]').prop('checked', set.dw1);
            $('.nova_notif *[name=dw2]').prop('checked', set.dw2);
            $('.nova_notif *[name=dw3]').prop('checked', set.dw3);
            $('.nova_notif *[name=dw4]').prop('checked', set.dw4);
            $('.nova_notif *[name=dw5]').prop('checked', set.dw5);
            $('.nova_notif *[name=dw6]').prop('checked', set.dw6);
            $('.nova_notif *[name=dw7]').prop('checked', set.dw7);

            $('.nova_notif *').change(function () {
                var json = {};
                json.to = $('.nova_notif .to').val();
                json.type = $('.nova_notif .type').val();
                json.time = $('.nova_notif .time').val();
                json.text = $('.nova_notif .text').val();
                json.btns = $('.nova_notif .btns').val();
                json.dw1 = $('.nova_notif *[name=dw1]').prop('checked');
                json.dw2 = $('.nova_notif *[name=dw2]').prop('checked');
                json.dw3 = $('.nova_notif *[name=dw3]').prop('checked');
                json.dw4 = $('.nova_notif *[name=dw4]').prop('checked');
                json.dw5 = $('.nova_notif *[name=dw5]').prop('checked');
                json.dw6 = $('.nova_notif *[name=dw6]').prop('checked');
                json.dw7 = $('.nova_notif *[name=dw7]').prop('checked');
                json.status = $('.nova_notif').parents('.digital-pipeline__item').attr('data-stage-id');
                if (JSON.stringify(json) == $('*[name="settings"]').val())
                    return true;
                $('*[name="settings"]').val(JSON.stringify(json));
                $('*[name="settings"]').change();
            })

            $('.keys a').click(function(e){
                e.preventDefault();
                $('.nova_notif .text').val($('.nova_notif .text').val()+$(this).html());
            })
        }
    });
}

notifications_market_settings.dp.load = function () {

    var set = $('[name="notifications_market_settings"]').val();

    if (!set) {
        return false;
    }

    set = JSON.parse(set);

    for (let i in set.table) {
        let manager = set.table[i];

        notifications_market_settings.dp.add(manager.manager, manager.percent, false);
    }

    for (let i in set.customSettings) {
        if (i == 'manager_for_rasp') {
            $('[name="' + i + '"]').val(set.customSettings[i])
            continue
        }

        $('[name="' + i + '"]').prop('checked', set.customSettings[i]);
    }
}

notifications_market_settings.dp.save = function () {

    var data = {};

    data.table = [];
    data.customSettings = {};

    for (var i = 0; i < $('.n_notifications_market_view table tbody tr').length; i++) {

        var ob = $('.n_notifications_market_view table tbody tr').eq(i);
        var el = {};

        el.manager = $(ob).find('*[name=manager]').val();
        el.percent = $(ob).find('*[name=percent]').val();

        data.table.push(el);
    }
    ;

    if (data.table.length < 1) {

        data = '';

    } else {

        data.customSettings.is_rasp_contact = $('[name="is_rasp_contact"]').prop('checked');
        data.customSettings.is_rasp_company = $('[name="is_rasp_company"]').prop('checked');
        data.customSettings.is_rasp_task = $('[name="is_rasp_task"]').prop('checked');

        data.customSettings.manager_for_rasp = $('.n_notifications_market_view [name="manager_for_rasp"]').val();
    }

    $('[name="notifications_market_settings"]').val(JSON.stringify(data)).change();

}

notifications_market_settings.dp.add = function (managerId = 0, managerPercent = 0, needSave = true) {

    var el = $('.notifications_market_view_block tbody').html();

    $('.n_notifications_market_view tbody').append(el);

    if (managerId != 0)
        $('.n_notifications_market_view tbody tr [name="manager"]:last').val(managerId)

    if (managerPercent != 0)
        $('.n_notifications_market_view tbody tr [name="percent"]:last').val(managerPercent)

    if (needSave)
        notifications_market_settings.dp.save();

    $('.n_notifications_market_view table tr td *').off('change');
    $('.n_notifications_market_view table tr td *').on('change', function () {
        notifications_market_settings.dp.save();
    });
}

notifications_market_settings.dp.removeRow = function (elem) {
    setTimeout(() => {
        $(elem).parents('tr').remove();
        notifications_market_settings.dp.save();
    }, 10);
}