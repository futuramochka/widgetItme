var n_datalib = {};

n_datalib.req = function (data, func) {
    data.subdomain = system.subdomain;
    $.post("https://nova-agency.ru" + '/api/data/', data, func, 'json');
}

n_datalib.get = function (name, func) {
    func == undefined ? function () {
    } : func;
    var is = true;
    if (name != 'v')
        var ob = $.parseJSON(localStorage.getItem('n_datalib_' + name));
    if (ob)
        if (ob.v == n_datalib.v)
            is = false;
    is = true;
    if (is)
        n_datalib.req({meth: 'get', name: name}, function (data) {
            data.v = n_datalib.v;
            localStorage.setItem('n_datalib_' + name, JSON.stringify(data));
            func(data);
        });
    else
        func($.parseJSON(localStorage.getItem('n_datalib_' + name)));
}

n_datalib.set = function (name, data, func) {
    func == undefined ? function () {
    } : func;
    n_datalib.v++;
    n_datalib.req({meth: 'set', name: name, data: data}, func);
}