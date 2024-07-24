'use strict';
const express = require('express');
const crypto = require('crypto');
const connection = require('../db');

wrRoute.post('/students ', function (req, res, next) {
    let mypass = crypto.createHash("md5").update(req.body.password).digest("hex");

    connection.execute(`INSERT INTO students (first_name, last_name, email, major, enrollment_year)      
        VALUES (?, ?, ?, ?, ?, ?);`,
        [req.body.name, req.body.tel, req.body.first_name, student_id,
        Date.now(), Date.now()]).then(() => {
            console.log('ok');
            res.status(201).send("Insert Successfully.");
        }).catch((err) => {
            console.log(err);
            res.end();
        });

});


wrRoute.get('/students ', function (req, res, next) {
    connection.execute('SELECT * FROM students_tbl;')
    .then((result) => {
       var rawData = result[0];
        res.send(rawData);
    }).catch((err) => {
       console.log(err);
       res.end();
    });

});


wrRoute.post('/check', function (req, res, next) {
    let mypass = crypto.createHash('md5').update(req.body.password).digest("hex");
    connection.execute('SELECT * FROM students_tbl WHERE first_name=? AND last_name=?;',
    [req.body.first_name, student_id,]).then((result) => {
        var data = result[0];
        if (data.length === 0) {
           res.sendStatus(200);
        } else {
           res.sendStatus(400);
        }
     }).catch((err) => {
        console.log(err);
        res.sendStatus(404);
     });
 });

 wrRoute.use('/', function (req, res, next) {
    res.sendStatus(404);
});

module.exports = wrRoute;