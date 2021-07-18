
var n_linked_c = {};
var lc = {};
var modalAnswer = false;

n_linked_c.ArrayHelper = {
    split: function (arr, n) {
        var res = [];
        while (arr.length) {
            res.push(arr.splice(0, n));
        }
        return res;
    }
};
//Функция для получения контактов
n_linked_c.Contacts = {
    //var contacts = Contacts.get();
    get: function (params = {}) {
        var offset = 0;
        var response = [];

        function request() {
            params.limit_rows = 500;
            params.limit_offset = offset;
            var result = false;
            $.ajax({
                url: '/api/v2/contacts',
                async: false,
                type: 'GET',
                dataType: 'json',
                data: params
            })
                .done(function (data) {
                    if(data){
                        if (data._embedded) {
                            result = (data._embedded.items) ? data._embedded.items : false;
                        }
                    }
                });
            return result;
        };

        function compound() {
            var part = request();
            if (part) {
                response = response.concat(part);
                if (part.length >= 500) {
                    offset += part.length;
                    compound();
                }
            }
        };
        compound();
        return response;
    },
};

//Функция для показа связанных контактов
n_linked_c.showLinked = function(arrLeadsCheckedId)
{
	//npl.showPreloaderNova();
  data = n_linked_c.Contacts.get({query:'auto_linked'});
  data = {_embedded:{items:data}};
	//$.get('/api/v2/contacts?query=auto_linked',function(data){
		var up = [];
		if(data!=undefined)
		for(var i in data._embedded.items)
		{
			var is = false;
			var tags = [];
			for(var t in data._embedded.items[i].tags)
			{
				if(data._embedded.items[i].tags[t].name=='auto_linked')
					is = true;
				else
					tags.push(data._embedded.items[i].tags[t].name);
			}
			if((is)&&(up.length<500))
				up.push({id:data._embedded.items[i].id,updated_at:(new Date()).getTime()/1000,tags:tags.join(',')});
		}
		if(up.length==0)
			up.push({id:1});
		console.log(data);
		console.log(up);
		n_linked_c.updateAll('/api/v2/contacts',up,function(){
			var list = [];
			$('.js-list-row[data-id] .control-checkbox__body').each(function(i){
				if($(this).find('input[type=checkbox]').is(':checked'))
					list.push($(this).parents('*[data-id]').attr('data-id'))

				if(i>=$('.js-list-row[data-id] .control-checkbox__body').length-1)
				{
          //Результат взаимодействия со всплывающим окном
          n_linked_c.modalResult = function(modalAnswer) {

            //$('.lc_modal').hide();
            console.log('modalAnswer: ', modalAnswer);

            if (modalAnswer == true) {
              //console.log('modalAnswer = false, т.е. !confirm("Обработать все записи по фильтру?")');
              $.get('/api/v2/leads?&id[]='+arrLeadsCheckedId.join('&id[]='),gnext);
            } else {
              //console.log('modalAnswer = true, т.е. confirm("Обработать все записи по фильтру?")');
              n_linked_c.getAll(gnext);
            }
          }


					 /*if(modalAnswer == true)
						$.get('/api/v2/leads?&id[]='+arrLeadsCheckedId.join('&id[]='),gnext)
					else
						n_linked_c.getAll(gnext);*/

					function gnext(data)
					{
						if(data._embedded!=undefined)
							data = data._embedded.items;
						var c = [];
						for(var i in data)
							if(data[i].main_contact!=undefined)
								c.push(data[i].main_contact.id);

            var contactsIds = n_linked_c.ArrayHelper.split(c, 500);
            console.log(contactsIds);
            var contacts = [];
            for (var i=0;i<contactsIds.length;i++){
                var ids = contactsIds[i];
                var partcontacts = n_linked_c.Contacts.get({id: ids});
                if (partcontacts.length != 0){
                    contacts = contacts.concat(partcontacts);
                }
            }

            console.log(contacts);

						var data = {_embedded:{items:contacts}};
						var up = [];
						for(var i in data._embedded.items)
						{
							var tags = [];
							for(var t in data._embedded.items[i].tags)
								tags.push(data._embedded.items[i].tags[t].name);
							tags.push('auto_linked');
							up.push({id:data._embedded.items[i].id,updated_at:(new Date()).getTime(),tags:tags.join(',')});
						}
						n_linked_c.updateAll('/api/v2/contacts',up,function(){
							setTimeout(function(){
								$.get('/api/v2/contacts?query=auto_linked',function(data){
									var id = 0;
									for(var i in data._embedded.items)
										for(var t in data._embedded.items[i].tags)
											if(data._embedded.items[i].tags[t].name=='auto_linked')
												id = data._embedded.items[i].tags[t].id;
									//npl.hidePreloaderNova();
									$('body').append('<a class="js-navigate-link n_link" href="/contacts/list/contacts/?tag%5B%5D='+id+'&useFilter=y"></a>');
									$('.n_link').click();
									$('.n_link').remove();
								})
							},1500)
						})
					}
				}
			})
		})
	//})
}

n_linked_c.updateAll = function(link,up,func)
{
	function getNext(link,up)
	{
		console.log(up.length);
		var upd = up.splice(0,100);
		console.log(upd.length);
    //npl.showPreloaderNova('Загрузка<br>осталось '+up.length+' объектов');
		$.post(link,{update:upd},function(){
			console.log(up.length);
			if(up.length>0)
				getNext(link,up);
			else
			{
				console.log('finish');
				func();
			}
		})
	}

	getNext(link,up);
}

function parse_str (str, array) { // eslint-disable-line camelcase
  //       discuss at: http://locutus.io/php/parse_str/
  //      original by: Cagri Ekin
  //      improved by: Michael White (http://getsprink.com)
  //      improved by: Jack
  //      improved by: Brett Zamir (http://brett-zamir.me)
  //      bugfixed by: Onno Marsman (https://twitter.com/onnomarsman)
  //      bugfixed by: Brett Zamir (http://brett-zamir.me)
  //      bugfixed by: stag019
  //      bugfixed by: Brett Zamir (http://brett-zamir.me)
  //      bugfixed by: MIO_KODUKI (http://mio-koduki.blogspot.com/)
  // reimplemented by: stag019
  //         input by: Dreamer
  //         input by: Zaide (http://zaidesthings.com/)
  //         input by: David Pesta (http://davidpesta.com/)
  //         input by: jeicquest
  //      bugfixed by: Rafał Kukawski
  //           note 1: When no argument is specified, will put variables in global scope.
  //           note 1: When a particular argument has been passed, and the
  //           note 1: returned value is different parse_str of PHP.
  //           note 1: For example, a=b=c&d====c
  //        example 1: var $arr = {}
  //        example 1: parse_str('first=foo&second=bar', $arr)
  //        example 1: var $result = $arr
  //        returns 1: { first: 'foo', second: 'bar' }
  //        example 2: var $arr = {}
  //        example 2: parse_str('str_a=Jack+and+Jill+didn%27t+see+the+well.', $arr)
  //        example 2: var $result = $arr
  //        returns 2: { str_a: "Jack and Jill didn't see the well." }
  //        example 3: var $abc = {3:'a'}
  //        example 3: parse_str('a[b]["c"]=def&a[q]=t+5', $abc)
  //        example 3: var $result = $abc
  //        returns 3: {"3":"a","a":{"b":{"c":"def"},"q":"t 5"}}
  //        example 4: var $arr = {}
  //        example 4: parse_str('a[][]=value', $arr)
  //        example 4: var $result = $arr
  //        returns 4: {"a":{"0":{"0":"value"}}}
  //        example 5: var $arr = {}
  //        example 5: parse_str('a=1&a[]=2', $arr)
  //        example 5: var $result = $arr
  //        returns 5: {"a":{"0":"2"}}

  var strArr = String(str).replace(/^&/, '').replace(/&$/, '').split('&')
  var sal = strArr.length
  var i
  var j
  var ct
  var p
  var lastObj
  var obj
  var chr
  var tmp
  var key
  var value
  var postLeftBracketPos
  var keys
  var keysLen

  var _fixStr = function (str) {
    return decodeURIComponent(str.replace(/\+/g, '%20'))
  }

  var $global = (typeof window !== 'undefined' ? window : global)
  $global.$locutus = $global.$locutus || {}
  var $locutus = $global.$locutus
  $locutus.php = $locutus.php || {}

  if (!array) {
    array = $global
  }

  for (i = 0; i < sal; i++) {
    tmp = strArr[i].split('=')
    key = _fixStr(tmp[0])
    value = (tmp.length < 2) ? '' : _fixStr(tmp[1])

    while (key.charAt(0) === ' ') {
      key = key.slice(1)
    }

    if (key.indexOf('\x00') > -1) {
      key = key.slice(0, key.indexOf('\x00'))
    }

    if (key && key.charAt(0) !== '[') {
      keys = []
      postLeftBracketPos = 0

      for (j = 0; j < key.length; j++) {
        if (key.charAt(j) === '[' && !postLeftBracketPos) {
          postLeftBracketPos = j + 1
        } else if (key.charAt(j) === ']') {
          if (postLeftBracketPos) {
            if (!keys.length) {
              keys.push(key.slice(0, postLeftBracketPos - 1))
            }

            keys.push(key.substr(postLeftBracketPos, j - postLeftBracketPos))
            postLeftBracketPos = 0

            if (key.charAt(j + 1) !== '[') {
              break
            }
          }
        }
      }

      if (!keys.length) {
        keys = [key]
      }

      for (j = 0; j < keys[0].length; j++) {
        chr = keys[0].charAt(j)

        if (chr === ' ' || chr === '.' || chr === '[') {
          keys[0] = keys[0].substr(0, j) + '_' + keys[0].substr(j + 1)
        }

        if (chr === '[') {
          break
        }
      }

      obj = array

      for (j = 0, keysLen = keys.length; j < keysLen; j++) {
        key = keys[j].replace(/^['"]/, '').replace(/['"]$/, '')
        lastObj = obj

        if ((key === '' || key === ' ') && j !== 0) {
          // Insert new dimension
          ct = -1

          for (p in obj) {
            if (obj.hasOwnProperty(p)) {
              if (+p > ct && p.match(/^\d+$/g)) {
                ct = +p
              }
            }
          }

          key = ct + 1
        }

        // if primitive value, replace with object
        if (Object(obj[key]) !== obj[key]) {
          obj[key] = {}
        }

        obj = obj[key]
      }

      lastObj[key] = value
    }
  }
}

n_linked_c.getAll = function(func){
    var page = 1;
    var list = [];

    function getNext(){
        var d = {};
        parse_str(window.location.href.split('?')[1],d);
        if(page>1)
            d.PAGEN_1 = page;
        if(window.location.href.split('pipeline').length>1)
            var url = '/ajax/leads/list/pipeline'+window.location.href.split('pipeline')[1].split('?')[0];
        else
            var url = '/ajax/leads/list/';
        $.post(url,d,function(data){
            list = list.concat(data.response.items);

            //npl.showPreloaderNova('Загрузка<br>Обработано '+list.length+' объектов');

            console.log(data);

            n_linked_c.fields = data.response.fields;

            if(data.response.pagination.current==data.response.pagination.total)
            {
                func(list);
            }
            else{
                page++;
                getNext();
            }
        },'json')
    }

    getNext();
}