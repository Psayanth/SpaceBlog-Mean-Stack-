/*jshint esversion: 6 */
const express = require('express');
const userData = require('./src/model/userData');
const blogData = require('./src/model/blogpost');
const feedbackData = require('./src/model/feedback');
const chalk = require('chalk');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

var app = new express();
app.use(cors());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "public")));
app.set('model', './src/model');


app.post('/signup', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    console.log(req.body);

    var user = {
        firstName: req.body.userData.userFirstname,
        lastName: req.body.userData.userLastname,
        email: req.body.userData.userEmail,
        password: req.body.userData.userPassword,
        cnfrmPassword: req.body.userData.userconfirmPassword
    };
    if (userData.find()) {
        userData.findOne({ email: user.email }).then((data) => {
            if (data) {
                res.send({ sts: false });
            } else {
                var User = new userData(user);
                User.save();
                res.send({ sts: true });
            }
        });


    } else {
        var User = new userData(user);
        User.save();
        res.send({ sts: true });
    }
});
app.post('/login', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');

    var item = {
        email: req.body.userData1.luserEmail,
        password: req.body.userData1.luserPassword

    };

    userData.findOne({ $and: [{ email: item.email }, { password: item.password }] })
        .then((data) => {

            if (data) {
                if (item.email == "sayanthsay777@gmail.com") {
                    var x = Math.random();
                    var id = Math.round(x);
                    res.send({ msg1: 'Welcome back Admin!!!', sts: true, id: id, email: item.email, name: data.firstName });
                } else {
                    var y = Math.random();
                    var idd = Math.round(y);
                    res.send({ msg1: `Welcome to SpaceBlog ${data.firstName}`, sts: true, id: idd, email: item.email, name: data.firstName });
                }

            } else {
                res.send({ sts: false });
            }
        });

});

app.post('/upload', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    var blog_data = {
        title: req.body.blogData.title,
        body: req.body.blogData.body,
        imgurl: req.body.blogData.imgurl,
        date: req.body.blogData.date,
        email: req.body.blogData.email,
        name: req.body.blogData.name

    };
    var Blog = new blogData(blog_data);
    Blog.save();
    res.send({ sts: true });
});

app.post('/read', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');

    blogData.find({ email: req.body.email }).then((data) => {

        res.send(data);

    });

});

app.get('/update/:id', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    const id = req.params.id;
    blogData.findOne({ _id: id }).then((data) => {
        //res.send({ _id: id, title: data.title, body: data.body, imgurl: data.imgurl });
        res.send(data);
    });

});

app.post('/update', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    var blog_data = {
        title: req.body.blogData.title,
        body: req.body.blogData.body,
        imgurl: req.body.blogData.imgurl,
        date: req.body.blogData.date,
        email: req.body.blogData.email,
        name: req.body.blogData.name

    };
    blogData.update({ _id: req.body.blog._id }, blog_data).then((err) => {
        res.send({ msg: "Updated" });
    });

});

app.post('/delete', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    blogData.deleteOne({ _id: req.body.id }).then(() => {
        res.send({ msg: "Post is deleted " });
    });

});

app.get('/readall', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    blogData.find().then((data) => {
        res.send(data);
    });

});

app.post('/admin', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    var Aemail = req.body.email;
    userData.findOne({ email: Aemail }).then((data) => {
        if (Aemail == "sayanthsay777@gmail.com") {
            res.send({ sts: true });
        } else {
            res.send({ sts: false });
        }

    });
});

app.get('/getusers', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');

    userData.find().then((data) => {
        res.send(data);
    });


});

app.post('/deleteuser', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    userData.deleteOne({ _id: req.body.id }).then(() => {
        res.send({ msg: "User is removed..!!!" });
    });

});

app.post('/feedback', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    var feed_back = {
        name: req.body.feedBack.name,
        email: req.body.feedBack.email,
        comments: req.body.feedBack.comments,
    };
    var feed = new feedbackData(feed_back);
    feed.save();
    res.send({ sts: true });
});

app.listen(3001, () => {
    console.log(chalk.blue('Listening to port number ') + chalk.yellow('3001') + chalk.green('!!!!'));
});