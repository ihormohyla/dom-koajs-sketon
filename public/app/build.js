({
    baseUrl: "js",
    paths: {
        "URIjs": 'library/uri.js/src'
    },
    shim: {

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

    },
    dir: 'js/builds',
    map: {
        "*": {
            "jquery": "library/jquery/dist/jquery"
        }
    },
//    optimize: 'none',
    modules: [
        {
            name: 'index',
            include: [],
            exclude: [
                'library/jquery/dist/jquery',
                'library/jquery-cookie/jquery.cookie',
                'library/flight/lib/utils',
                'library/flight/lib/debug',
                'library/flight/lib/compose',
                'library/flight/lib/advice',
                'library/flight/lib/registry',
                'library/flight/lib/base',
                'library/flight/lib/logger',
                'library/flight/lib/component',
                'library/underscore/underscore',
                'library/q/q.js',
                'library/basis-templates/basis-templates.min.js'
            ]
        }
    ]
})