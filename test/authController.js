process.env.NODE_ENV = 'test';

const server = require('../server.js');
const request = require('supertest').agent(server.listen());
const co = require('co');
const User = require('../app/server/models/user');

before(co.wrap(function*() {
    yield User.create({
        username: 'username',
        password: 'password',
    });
}));

describe('AUTHENTICATION', () => {
    it('should login', (done) => {
        request
            .post('/api/login')
            .send({
                username: 'username',
                password: 'password',
            })
            .expect(302, done);
    });

    it('should be logged in', (done) => {
        request
            .get('/api/isLoggedIn')
            .expect(200, done);
    });

    it('should logout', (done) => {
        request
            .get('/api/logout')
            .expect(302, done);
    });

    it('should not be logged in', (done) => {
        request
            .get('/api/isLoggedIn')
            .expect(401, done);
    });
});

after(co.wrap(function*() {
    yield User.remove({});
}));
