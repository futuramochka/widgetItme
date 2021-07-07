var n_uk = {};

n_uk.start = function(){

    $('body').off('click','.n_ui_close');
    $('body').on('click','.n_ui_close',n_uk.close_modal);
}

n_uk.close_modal = function(){
    $('.n_ui_modal').addClass('n_hide');
    setTimeout(function(){
        $('.n_ui_overlay').remove();
        $('#page_holder, #card_holder, #left_menu').removeClass('n_blur');
    },500)
}

n_uk.open_modal = function(html,cl){
    $('#page_holder, #card_holder, #left_menu').addClass('n_blur');
    $('body').append('<div class="n_ui_overlay"><div class="n_ui_modal '+cl+'"><div class="n_ui_close">X</div><div class="n_ui_modal_content">'+html+'</div></div></div>');
}

n_uk.getAll = function(url,params,func){
    if(params.limit_offset==undefined)
    {
        n_uk.data_all = [];
        params.limit_offset = 0;
        params.limit_rows = 500;
    }else{
        params.limit_offset+=500;
    }

    $.get(url,params,function(data){
        if(data)
        {
            n_uk.data_all = n_uk.data_all.concat(data._embedded.items);
            n_uk.getAll(url,params,func);
        }else{
            func(n_uk.data_all);
        }
    })
}

document.addEventListener('render',n_uk.start);
document.addEventListener('nova_ready',n_uk.start);