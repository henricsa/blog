function* isLoggedIn() {
    if (!this.isAuthenticated()) {
        this.throw(401);
    }
    this.status = 200;
}

function* logout() {
    this.logout();
    this.redirect('/');
}

function login(passport) {
    return passport.authenticate('local', {
        successRedirect: '/admin',
        failureRedirect: '/login',
    });
}

module.exports = (router, passport) => {
    router.get('/api/isLoggedIn', isLoggedIn);
    router.get('/api/logout', logout);
    router.post('/api/login', login(passport));
};
