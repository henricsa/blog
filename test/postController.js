process.env.NODE_ENV = 'test';

const server = require('../server.js');
const request = require('supertest').agent(server.listen());
const co = require('co');
const Post = require('../app/server/models/post');

describe('CREATE', () => {
    it('should create a post', (done) => {
        request
            .post('/api/post')
            .send({
                title: 'title',
                body: 'body',
            })
            .expect(201, done);
    });
});

after(co.wrap(function*() {
    yield User.remove({});
}));
