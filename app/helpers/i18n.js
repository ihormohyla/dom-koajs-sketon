var thunkify = require('thunkify'),
    config = require('config')
    i18n = require('i18n');

i18n.configure(config.i18n);
var geti18n = thunkify(i18n.init);

module.exports = function (app){
    app.use(function * (next){
        yield geti18n(this.request, this.response);
        yield next;
    });
    app.use(function * (next){
        this.request.setLocale((this.cookies.get('lang')||'ru'));
        this.locals.__ = function (text, render) {
            return i18n.__.apply(this.request, arguments);
        };
        yield next;
    });
};