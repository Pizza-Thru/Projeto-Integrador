const bcrypt = require('bcryptjs');
const { user } = require('../models/models');


module.exports = class auth {
    static async login(req, res) {
        const { email__usuario, senha__usuario } = req.body;
        // localizar o usuario
        const users = await user.findOne({ where: { user_email: email__usuario } });

        if (!users) {
            req.flash('loginError', 'Usuário ou senha incorreto, tente novamente.');
            res.render('acessoUsuario', { layout: 'main' });
            return
        }
        // Comparar a senha
        const passwordMatch = bcrypt.compareSync(senha__usuario, users.password_login_user);
        if (!passwordMatch) {
            req.flash('loginError', 'Usuário ou senha incorreto, tente novamente.');
            res.render('acessoUsuario', { layout: 'main' });
            return
        }
        req.session.userid = users.id_user;

        req.session.save(() => {
            res.redirect('/');
        })

    }

    static async register(req, res) {
        const { email, cpf, senha } = req.body;

        const userExist = await user.findOne({ where: { user_email: email } });
        if (userExist) {
            req.flash('userExist', 'E-mail já cadastrado, faça o login.');
            res.render('cadastroUsuario', { layout: "main", });
            return
        }

        const userCpfExist = await user.findOne({ where: { user_cpf: cpf } });
        if (userCpfExist) {
            req.flash('cpfExist', 'CPF já cadastrado, faça o login.');
            res.render('cadastroUsuario', { layout: "main", });
            return
        }

        const salt = bcrypt.genSaltSync(10)
        const password = bcrypt.hashSync(senha, salt)

        const newUser = {
            /* Paulo - Incluir seu códio aqui */

            password_login_user: password
        };

        user.create(newUser)
            .then((newUser) => {
                req.session.userid = newUser.id_user;
                req.session.save(() => {
                    res.redirect('/')
                })
            })
            .catch((err) => {
                console.log(err);
            });
    }
    
    static logout(req, res) {
        req.session.destroy()
        res.redirect('/login')
      }
}