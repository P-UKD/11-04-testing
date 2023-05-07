function combineAndRemoveZ(arr) {
    const combinedStr = arr.join("");
    const withoutZ = combinedStr.replace(/z/g, "");
    return withoutZ;
}

function checkLoginAndPassword(login, password) {
    const validLoginsAndPasswords = [
        { login: "user1", password: "pass1", secret: "secret1" },
        { login: "user2", password: "pass2", secret: "secret2" },
        { login: "user3", password: "pass3", secret: "secret3" },
    ];

    const user = validLoginsAndPasswords.find(
        (user) => user.login === login && user.password === password
    );

    if (user) {
        return user.secret;
    } else {
        return null;
    }
}

module.exports = { combineAndRemoveZ, checkLoginAndPassword };