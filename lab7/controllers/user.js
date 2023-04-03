const User = require("../models/user");
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");

const createUser = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;
    const typeUser = req.body.typeUser;
    console.log(email);
    User.findOne({ where: { email: email } })
        .then(user => {
            if (user) {
                console.log(user.email);
                return res.status(400).json({ message: "Email da ton tai" });
            }
            return bcrypt.hash(password, 12);
        })
        .then(hashedPassword => {
            const user = new User({ email: email, password: hashedPassword, typeUser: typeUser });
            return user.save();
        })
        .then(user => {
            return res.status(201).json({
                message: 'Thêm thành công thành viên!',
                user: user
            });
        })
        .catch(err => res.status(400).json(err))
}

const login = async (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ where: { email: email } })
        .then(user => {
            if (!user) {
                return res.status(400).json({ message: "Email khong ton tai" });
            }
            return Promise.all([bcrypt.compare(password, user.password), user]);
        })
        .then(result => {
            const isMatch = result[0];
            const user = result[1];

            if (!isMatch) return res.status(400).json({ message: "Password khong khop" })
            const payload = {
                email: user.email,
                typeUser: user.typeUser
            }
            console.log(payload);
            return jwt.sign(payload, "FptPolyTechnic", { expiresIn: 3600 })
        })
        .then(token => {
            console.log(token);
            res.status(200).json({ message: "Login thanh cong", token })
        })
        .catch(err => res.status(400).json(err))
}

module.exports = {
    createUser,
    login,
}