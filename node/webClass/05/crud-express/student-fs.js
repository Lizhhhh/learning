// 操作数据库中的数据

fs = require("fs");
const dbPath = "./db.json";

/**
 * 获取所有学生
 * return []
 */
exports.find = function(cb) {
    fs.readFile(dbPath, "utf8", function(err, data) {
        if (err) {
            return cb(err);
        }
        cb(null, JSON.parse(data).students)
    })
}

/**
 * 获取单个学生
 */
exports.findById = function(id, cb) {
    fs.readFile(dbPath, "utf8", function(err, data) {
        if (err) {
            return cb(err);
        }
        var students = JSON.parse(data).students;
        var stu = students.find(function(item) {
            return item.id == parseInt(id);
        })
        cb(null, stu)
    })
}


/**
 * 增加学生
 * return []
 */
exports.add = function(student, cb) {
    fs.readFile(dbPath, "utf8", function(err, data) {
        console.log(err, data);
        if (err) {
            return cb(err);
        }
        var students = JSON.parse(data).students;
        student.id = ((students.length !== 0) && students[students.length - 1].id + 1 - 0) || 1;
        students.push(student);
        var ret = JSON.stringify({
            students: students
        })
        fs.writeFile(dbPath, ret, function(err) {
            if (err) {
                return cb(err)
            }
            cb(null);
        })
    })
}

/**
 * 修改学生
 */
exports.updateById = function(student, cb) {
    fs.readFile(dbPath, "utf8", function(err, data) {
        if (err) {
            return cb(err);
        }
        var students = JSON.parse(data).students;
        var stu = students.find((item) => { return item.id == parseInt(student.id) });

        for (var key in student) {
            stu[key] = student[key]
        }

        var fileData = JSON.stringify({
            students: students
        })
        fs.writeFile(dbPath, fileData, function(err) {
            if (err) {
                return cb(err)
            }
            cb(null)
        });
    })
}

/**
 * 删除学生
 */
exports.deleteById = function(id, cb) {
    fs.readFile(dbPath, "utf8", function(err, data) {
        if (err) {
            return cb(err);
        }
        id = parseInt(id);
        var students = JSON.parse(data).students;
        var delId = 0;
        if (students.length > 0) {
            for (let i = 0; i < students.length; i++) {
                if (students[i].id === id) {
                    delId = i;
                }
            }
        }
        students.splice(delId, 1);
        var ret = JSON.stringify({
            students: students
        });
        fs.writeFile(dbPath, ret, function(err) {
            if (err) {
                return cb(err)
            }
            cb(null);
        })
    })
}