const Validator = require("validator");

module.exports = function validateRegisterInput(data) {
    let errors = {};
    data.name = data.name || "";
    data.email = data.email || "";
    data.password = data.password || "";

    if (Validator.isEmpty(data.name)) {
        errors.name = "Name is required";
    }

    if (Validator.isEmpty(data.email)) {
        errors.email = "Email is required";
    } else if (!Validator.isEmail(data.email)) {
        errors.email = "Email is invalid";
    }

    if (Validator.isEmpty(data.password)) {
        errors.password = "Password is required";
    }

    if (!Validator.isLength(data.password, { min: 6 })) {
        errors.password = "Password must be at least 6 characters";
    }

    return {
        errors,
        isValid: errors.length === 0
    };
};