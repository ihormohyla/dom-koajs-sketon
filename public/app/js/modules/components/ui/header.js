"use strict";

define(
    'modules/components/ui/header',
    [
        'library/flight/lib/component',
        'library/jquery/dist/jquery'
    ],
    function (defineComponent) {
        return defineComponent(Header);

        function Header() {
            this.after('initialize', function () {
                console.log('initialize Header Component ui');
            });
        }
    }
)