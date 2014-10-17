module.exports = {
    app: {
        name: 'myKoajsApp',
        version: '0.1.0'
    },
    server: {
        port: 5555
    },
    template: {
        path: 'app/views',
        options: {
            ext: 'ect',
            cache: false,
            locals : {
                js_domain : "http://img.dom.dev-ria.com",
                js_version : "0.0.1",
                js_builds : ""
            }
        }
    },
    session: {
        secretKey: 'myKoajsSecretKey'
    }
};