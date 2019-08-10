var express = require("express");
var User = require("./models/user");
var md5 = require("blueimp-md5");
var router = express.Router();

router.get('/', function(req, res) {
    res.render("index.html", {
        user: req.session.user
    })
});

router.get('/login', function(req, res) {
    res.render("login.html")
});

router.post('/login', function(req, res) {
    var body = req.body
    User.findOne({
        email: body.email,
        password: md5(md5(body.password))
    }, function(err, data) {
        if (err) {
            return res.status(500).json({
                err_code: 500,
                message: err.message
            })
        }

        if (!data) {
            return res.status(200).json({
                err_code: 1,
                message: "Email or Password is invalid."
            })
        }

        // 登录成功,记录用户的登录状态
        req.session.user = data;

        res.status(200).json({
            err_code: 0,
            message: "OK"
        })
    })
});

router.get('/register', function(req, res) {
    res.render("register.html")
});

router.post('/register', function(req, res) {
    var body = req.body;
    User.findOne({
        $or: [{
                email: body.email
            },
            {
                nickname: body.nickname
            }
        ]
    }, function(err, data) {
        if (err) {
            return res.status(500).json({
                err_code: 500,
                message: "Internal error!"
            });
        }
        if (data) {
            return res.status(200).json({
                err_code: 1,
                message: "Nickname or email have already exists."
            })
        }

        body.password = md5(md5(body.password));
        new User(body).save(function(err, user) {
            if (err) {
                return res.status(500).json({
                    err_code: 500,
                    message: "Internal error"
                })
            }
            // 注册成功,使用 session 记录用户的登录状态
            req.session.user = user;

            res.status(200).json({
                err_code: 0,
                message: "OK"
            });
        })
    })

});

router.get('/logout', function(req, res) {
    req.session.user = null;
    res.redirect('/login');
})

router.get('/topics/new', function(req, res) {
    console.log(req.session.user, "session user");
    res.render("topic/new.html");
})
module.exports = router;