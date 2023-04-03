const lad = require("lodash");
const validator = require("validator");

const checkInput = async (req, res, next) => {
    let errors = {};
    const email = lad.get(req.body.email, "email", "");
    const password = lad.get(req.body.password, "password", "");
    const typeUser = lad.get(req.body.typeUser, "typeUser", "");

    //if (validator.isEmpty(errors)) return next();

    return res.status(403).json(errors);
}

module.exports = {
    checkInput
}