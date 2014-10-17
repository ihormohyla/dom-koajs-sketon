"use strict";
define(
    'modules/pages/search',
    [
        'library/flight/lib/component',
        'library/flight/lib/utils',
        'library/q/q'
    ],
    function (defineComponent, utils, Q){
        return defineComponent(Search);

        function Search() {
            this.defaultAttrs({
                content : '#content'
            });

            this.after('initialize', function (e) {
                console.log('initialize Search page!');
            });

        };
    }
);