
linked_contacts_market_settings = {};

if (!this.nova_platform_blob)
    var nova_platform_blob = '';

    linked_contacts_market_settings.showSettings = function (id) {
    var settingsHTML = templateHTML;
    console.log("Текст описания виджета Связанные контакты получен");
    if (!$('.' + id + ' .widget_settings_block').length)
        return false;

    $('.' + id + ' .widget_settings_block:last').hide().parent().append(settingsHTML);

    $(document).ready(function () {
        let customInput = document.querySelector("[name='linked_contacts_market_settings']");
        let windowModalSettings = document.querySelector('.modal');
        if(windowModalSettings != undefined) {
            if(customInput.value == 1) {
                setTimeout(function() {
                    ltv_market_settings.save()
                }, 5000);
                customInput.value = 2;
            } else {
                console.log('Настройки виджета сохранены');
            }
        }
    })
}

linked_contacts_market_settings = function () {
    $('.js-widget-save').click();
}