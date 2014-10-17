module.exports = {
    app: {
        name: 'myKoajsApp',
        version: '0.1.0'
    },
    server: {
        port: 5555
    },
    i18n : {
        defaultLocale: 'ru',
        // setup some locales - other locales default to en silently
        locales: ['ru', 'ua', 'en'],

        // sets a custom cookie name to parse locale settings from
        cookie: 'lang',

        // where to store json files - defaults to './locales'
        directory: __dirname + '/locales'
    },

    template: {
        path: 'app/views',
        options: {
            ext: 'ect',
            cache: false,
            locals : {
                js_domain : "http://img.dom.dev-ria.com", //"http://img.dom.ria.com", "http://img.dom.test-ria.com"
                js_version : "0.0.1",
                js_builds : "" // "/builds"
            }
        }
    },
    session: {
        secretKey: 'myKoajsSecretKey'
    }
};