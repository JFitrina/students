const express = require('express');
const connection = require('../db');

udRoute.put('/users/:uid', function (req, res, next) {
    connection.execute("UPDATE students_tbl SET  first_name=?, last_name=? , email=? , major=? , enrollment_year=?  WHERE student_id=?;",
        [req.body.name, req.body.tel, Date.now(), req.params.uid])
        .then(() => {
            console.log('ok');
        }).catch((err) => {
            console.log(err);
        });
    res.status(200).send("Update Successfully.");

});

udRoute.delete('/users/:uid', function (req, res, next) {
    connection.execute("DELETE FROM students_tbl SET  first_name=?, last_name=? , email=? , major=? , enrollment_year=?  WHERE student_id=?;",
        [req.params.uid])
        .then(() => {
            console.log('ok');
        }).catch((err) => {
            console.log(err);
        });
    res.end();
});

udRoute.use('/', function (req, res, next) {
    res.sendStatus(404);
});
module.exports = udRoute;