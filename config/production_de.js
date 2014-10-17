module.exports = {
    app: {
        name: 'myKoajsApp',
        version: '0.1.0'
    },
    server: {
        port: process.env.NODE_APP_INSTANCE
    },
    template: {
        path: 'app/views',
        options: {
            ext: 'ect',
            cache: false,
            locals : {
                js_domain : "http://img.dom.ria.com",
                js_version : "0.0.1",
                js_builds : "/builds"
            }
        }
    },
    session: {
        secretKey: 'myKoajsSecretKey'
    }
};