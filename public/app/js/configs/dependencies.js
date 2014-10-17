"use strict";

define('configs/dependencies', function(){
    var dependencies = [];
    switch(true){
        case location.pathname.indexOf('search')>-1:
            dependencies.push('modules/pages/search');
            break;
        default:
            dependencies.push('modules/pages/main');
            break;
    }
    return dependencies;
});