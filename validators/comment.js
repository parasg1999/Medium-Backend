const Validator = require("validator");

module.exports = validateCommentInput = (data) => {
    let errors = {};
    data.content = data.content?.trim() || "";

    if (Validator.isEmpty(data.content)) {
        errors.content = "We can't work without content";
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};