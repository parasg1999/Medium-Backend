const Validator = require("validator");

module.exports = validateNewBlogInput = (data) => {
    let errors = {};
    data.title = data.title?.trim() || "";
    data.description = data.description?.trim() || "";
    data.content = data.content?.trim() || "";

    if (Validator.isEmpty(data.title)) {
        errors.name = "Title is required";
    }

    if (Validator.isEmpty(data.description)) {
        errors.email = "Description is required";
    }

    if (Validator.isEmpty(data.content)) {
        errors.email = "We can't work without content";
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};