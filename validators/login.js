const Validator = require("validator");

module.exports = validateLoginInput = (data) => {
    let errors = {};
    data.email = data.email?.trim() || "";
    data.password = data.password || "";

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
        isValid: Object.keys(errors).length === 0,
    };
};