module.exports = {
    getEnvConfig: function () {
        return this[process.env.NODE_ENV || 'development'];
    },
    production: {
        mongoUrl: 'localhost/blog'
    },
    development: {
        mongoUrl: 'localhost/blog-dev'
    },
    test: {
        mongoUrl: 'localhost/blog-test'
    }
};
