const validator = require('validator');

const validatePassword = (password) => {
    return validator.isStrongPassword(password, {minLength: 4})
}

const validateEmail = (email) => {
    return validator.isEmail(email);
}

const validateNumber = (number) => {
    return number.length === 10;
}


const validateDate = (date) => {
    const diff = new Date(date) - new Date();
    return diff > 0;
}

export { validateEmail, validatePassword, validateNumber, validateDate };