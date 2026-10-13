
const generatePassword = (length = 8, useSpecialChars) => {
    let symbols = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

    if (useSpecialChars) {
        symbols += '!@#$%^&*()_+-=?';
    }

    let password = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * symbols.length);
        password += symbols[randomIndex];
    }

    return password;
};

module.exports = generatePassword;
