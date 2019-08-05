const fs = require("fs");
const express = require("express");
const student = require("./db-student-mongoose");

const router = express.Router();


router.get("/students", function(req, res) {
    student.find(function(err, students) {
        if (err) {
            return res.status(500).send("Server error.")
        }
        res.render("index.html", {
            students: students
        })
    })
})
router.get("/students/new", function(req, res) {
    res.render("new.html");
})

// 添加学生
router.post("/students/new", function(req, res) {
    new student(req.body).save(function(err) {
        if (err) {
            return res.status(500).send("Server error.")
        }
        res.redirect("/students");
    })
})


router.get("/students/edit", function(req, res) {
    // 调用mongoose接口通过id查询信息,并返回
    student.findById(req.query.id.replace(/\"/g, ''), function(err, data) {
        if (err) {
            return res.status(500).send("edit fail!");
        }
        res.render("edit.html", {
            s: data
        })
    })
})

// 编辑学生
router.post("/students/edit", function(req, res) {
    let id = req.body.id.replace(/\"/g, '').replace(" ", "");
    student.findByIdAndUpdate(id, req.body, function(err) {
        if (err) {
            console.log(err);
            return res.status(500).send("edit fail");
        }
        res.redirect("/students");
    })
})

// 删除学生
router.get("/students/delete", function(req, res) {
    let params = {
        _id: req.query.id.replace(/\"/g, '').replace(" ", "")
    }
    student.deleteOne(params, function(err) {
        if (err) {
            console.log(err);
            return res.status(500).send("delete fail");
        }
        res.redirect("/students");
    })
})














// 3. 把router暴露出去
module.exports = router;