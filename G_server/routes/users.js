const express = require("express")
const  jwt = require("jsonwebtoken")
const  bcrypt = require("bcrypt")
const uuid  = require('uuid').v4();
const db = require("../Models/Index");
const dotenv = require('dotenv')

dotenv.config();



const router = express.Router()

router.post("/register", async (req, res) => {
    const { firstName, lastName, userName, email, phoneNumber, password, userType } = req.body
    const q = "SELECT email FROM glash_users WHERE email = ?";
    db.query(q, [email], (err, data) => {
        if (err) return res.status(500).json(err);
        if (data.length) return res.status(409).json({ message: "email already exists!" });
        let hashedpassword = bcrypt.hashSync(password, 10)
        const value = [uuid, firstName, lastName, userName, email, phoneNumber, hashedpassword, userType];
        db.query(q, [value], (err) => {
            if (err) return res.status(500).json(err);
            return res.status(200).json({ message: "User registered successfully" });
        });
    })
})

router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const q = "SELECT `uuid`,`firstName`,`lastName`,`userName`,`email`,`phoneNumber`,`password`,`userType`, `created_at` FROM glash_users WHERE email = ?";
        db.query(q, [email], (err, data) => {
            if (err) {
                return res.status(500).json(err);
            }
            if (data.length > 0) {
                const user = data[0];
                const comparison = bcrypt.compareSync(password, user.password)
                if (!comparison) {
                    return res.status(400).json({ message: "wrong password" });
                }
                const token = jwt.sign({ id: user.uuid }, process.env.jwt);
                const expiryDate = new Date(Date.now() + 3600000); // 1 hour
                res.cookie('user_token', token, {
                    httpOnly: true,
                    expires: expiryDate,
                })
                    .status(200)
                    .json({
                        token,
                        user
                    });
            } else {
                res.status(404).json({ message: "User not found" });
            }
        });
    } catch (err) {
        res.status(500).json({ message: "named" });
    }
})

router.post('/add-address', (req, res) => {
    const { streetAddress, city, state, postalCode, country } = req.body
})


module.exports = router