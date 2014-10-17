"use strict";

/* Переменные окружения */
(function(){
    var start= new Date();
    window.ria = {};
    for(var attrs=document.querySelector('script[data-main]').attributes, i= 0, length=attrs.length;i<length; i++){
        if(attrs.item(i).nodeName.indexOf('data-') > -1){
            var key = attrs.item(i).nodeName.replace('data-','').replace(/(\-[a-z])/g, function($1){return $1.toUpperCase().replace('-','');});
            window.ria[key] = attrs.item(i).value;
        }
    }
    var end = new Date();
})();

requirejs.config({
    urlArgs: 'v=' + (window.ria.version || new Date().getTime()),
    paths  : {
        URIjs   : 'library/uri.js/src'
    },
    shim   : {
        'library/underscore/underscore'              : {
            exports: '_'
        },
        'library/basis-templates/basis-templates.min': {
            exports: 'bt'
        },
        'library/numeraljs/min/languages/ru-UA.min'  : {
            deps: ['library/numeraljs/min/numeral.min']
        },
        'library/numeraljs/min/numeral.min'          : {
            exports: 'numeral'
        },
        'library/typeahead.js/dist/typeahead.jquery' : {
            deps: ['library/jquery/dist/jquery', 'library/typeahead.js/dist/bloodhound']
        },
        'library/sr-pagination/lib/pagination'       : {
            exports: 'pagination'
        },
        'library/flight/lib/utils'                   : {
            deps: ['library/jquery/dist/jquery', 'library/es5-shim/es5-shim.min']
        },
        'library/flight/lib/component'               : {
            deps: ['library/jquery/dist/jquery']
        },
        'library/jquery-cookie/jquery.cookie'           : ['library/jquery/dist/jquery'],
        'library/sticky/jquery.sticky'                  : ['library/jquery/dist/jquery'],
        'library/jquery-validation/dist/jquery.validate': ['library/jquery/dist/jquery'],
        'library/q/q'                                   : {
            exports: 'Q'
        }
    }
});

require(
    [
        'library/jquery/dist/jquery',
        'configs/dependencies',
        'modules/components/ui/header'
    ],
    function (jquery, dependencies, header) {
        require(dependencies, function(/* [function initialize, ...] */){
            if (typeof arguments[0] === 'function') {
                header.attachTo('header');
                /* Запускаем функцию, которая инициализирует приложение  */
                arguments[0].attachTo('body');
            } else {
                throw new Error('Unsupported type of initialize function');
            }
        });
    }
);
