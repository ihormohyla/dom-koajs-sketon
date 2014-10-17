/**
 * Render
 */

module.exports = function render(app, locals) {
    "use strict";

    var views = require('koa-render'),
        merge = require('merge'),
        config = require('config');

    app.use(function * (next){
        merge(config.template.options.locals , this.locals);
        yield next;
    });
    if(!config.template.options.locals){
        config.template.options.locals = {};
    }
    app.use(views(config.template.path, config.template.options));
};
