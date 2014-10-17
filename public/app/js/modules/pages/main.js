"use strict";
define(
    'modules/pages/main',
    [
        'library/flight/lib/component',
        'library/flight/lib/utils',
        'library/q/q'
    ],
    function (defineComponent, utils, Q){
        return defineComponent(Main);

        function Main() {
            this.defaultAttrs({
                content : '#content'
            });

            this.after('initialize', function (e) {
                console.log('initialize Index page!');
            });

        };
    }
);