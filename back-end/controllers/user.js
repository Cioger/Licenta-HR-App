const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

const User = require('../models/user');
const { forwardAuthenticated } = require('../config/auth');

const controller = {
    register: async (req, res) => {
        const {email, password, password2} = req.body;
        let errors = [];

        if (!email || !password || !password2) {
            errors.push({ msg: 'Introduceti toate campurile' });
        }


        if (!email.includes("@") || !email.includes(".")) {
            errors.push({ msg: 'Formatul email-ului e invalid' });
        }

        if (password != password2) {
            errors.push({ msg: 'Parolele nu se potrivesc' });
        }

        if (password.length < 6) {
            errors.push({ msg: 'Parola trebuie sa aiba minim 6 caractere' });
        }

        if (errors.length > 0) {

            res.send(errors);
        } else {

            User.findOne({ where: { email: email } }).then(user => {
                if (user) {
                    errors.push({ msg: 'Email-ul e folosit deja' });

                    res.send({ msg: 'User-ul exista' });
                } else {
                            const newUser = new User({
                                email,
                                password
                            });

                            bcrypt.genSalt(10, (err, salt) => {
                                bcrypt.hash(newUser.password, salt, (err, hash) => {
                                    if (err) throw err;
                                    newUser.password = hash;
                                    newUser
                                        .save()
                                        .then(user => {
                                            res.send({ msg: 'User-ul a fost creat' });
                                        })
                                        .catch(err => console.log(err));
                                });
                            });
                        }
                    })

                }
    },

    getUser: async (req, res) => {
        User.findOne({
            where: { email: req.params.email }
        }).then((user) => {
            res.status(200).send(user);
        }).catch(err => {
            res.status(500).send(err);
        })
    },

    login: async (req, res) => {
        try {
            let user = await User.findOne({ where: { email: req.body.email } })
            let valid = await bcrypt.compare(req.body.password, user.password);

            if (valid) {
                res.send({ ok: true, id: user.id });
            } else {
                res.send({ ok: false, msg: 'Password/email doesnt match' });
            }
        }
        catch (err) {
            res.status(500).send(err);
        }
    },

    getUser: async (req, res) => {
        User.findOne({
            where: { id: req.params.id }
        }).then(user =>{
            res.status(200).send(user);
        }).catch(err => {
            res.status(500).send(err);
            res.send({ msg: 'Nu exista user-ul' });
        })
    },

    updateUser: async (req, res) => {
        const userToBeSent = {
            
            email: req.body.email,
            password: req.body.password,
            
        }
        let errors = [];

        const userEmail = await User.findOne({ where: { email: req.body.email } });

        if (userEmail) {
            errors.push({ msg: 'email-ul e folosit deja' });
        }


        if (!userToBeSent.email.includes("@") || !userToBeSent.email.includes(".")) {
            errors.push({ msg: 'Formatul email-ului e invalid' });
        }

        if (userToBeSent.password.length < 6) {
            errors.push({ msg: 'Parola trebuie sa aiba minim 6 caractere' });
        }

        

        if (errors.length > 0) {
            res.send(errors);
        } else {
            if (!userEmail) {
                res.send({ msg: 'User-ul nu exista' });
            } else {
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(userToBeSent.password, salt, (err, hash) => {
                        if (err) throw err;
                        user.password = hash;
                        user
                            .save()
                            .then(user => {
                                console.log('User-ul a fost salvat');
                            })
                            .catch(err => console.log(err));
                    });
                });

                try {
                    userDB = await User.update(userToBeSent, {
                        where: { name: req.params.name },
                    });
                    res.status(200).send({ msg: 'User schimbat' });
                }

                catch (err) {
                    res.status(200).send(err);
                }
            }

        }
    },

    deleteUser: async (req, res) => {
        try {
            const user = await User.findOne({ where: { email: req.body.email } });
            if (user) {
                await user.destroy();
                res.status(200).send({ msg: "User-ul a fost sters" });
            }
            else {
                res.status(404).send({ msg: "User-ul nu a fost gasit" });
            }
        }
        catch (err) {
            console.log(err);
        }
    }
}

module.exports = controller;

