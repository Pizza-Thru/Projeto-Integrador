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
      const { email, confirmarEmail, senha, confirmarSenha } = req.body;

        const userExist = await user.findOne({ where: { user_email: email } });
        if (userExist) {
            req.flash('userExist', 'E-mail já cadastrado, faça o login.');
            res.render('cadastroUsuario', { layout: "main"});
            return
        }

        if (email !== confirmarEmail) {
            req.flash('userExist', 'os E-mails não conferem, tente novamente');
            res.render('cadastroUsuario', { layout: "main"});
            //res.status(400).json({ msg: 'Password do not match' });
            return
        }

        if (senha !== confirmarSenha) {
            req.flash('userExist', 'As senhas não conferem, tente novamente');
            res.render('cadastroUsuario',{ layout: "main"});
            return
        }

        const salt = bcrypt.genSaltSync(10);
        const password = bcrypt.hashSync(senha, salt);

         const newUser = {
            user_name: req.body.nome,
            user_email:email,
            user_phone:req.body.telefone,
            user_city:req.body.cidade,
            user_state:req.body.estado,
            user_publicPlace:req.body.logradouro,
            user_district:req.body.bairro,
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

    static async recuperar (req,res){
        const { recuperar__email} = req.body;
        // localizar o usuario
        const users = await user.findOne({ where: { user_email: recuperar__email } });

        if (!users) {
            req.flash('emailError', 'Usuário incorreto, tente novamente.');
            res.render('recuperarSenha', { layout: 'main' });
            return
        }
            res.redirect('/login');
    }
}