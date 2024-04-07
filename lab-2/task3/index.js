const Authenticator = require('./classes/authenticator');

function main() {
    const authenticator1 = Authenticator.getInstance();
    const authenticator2 = Authenticator.getInstance();

    console.log(authenticator1 === authenticator2);

    authenticator1.authenticate('user', 'password');
    authenticator2.authenticate('admin', 'adminpassword');
}

main();