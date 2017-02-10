var express = require('express'),
    router = express.Router(),
    EmployeeSchema = require('../models/Employee');


router.get('/admin', function(req, res) {
    var employeeObject = {
            employeeName: "hi",
            password: "123",
            number: "3",
            position: "manager" };
    var employee = new EmployeeSchema(employeeObject);

    employee.save(function(err, employeeSave){
        console.log("saved");
    });

    res.render('admin.jade', {
        title: "Cloud 11 - Recruitment App Admin Dashboard",
            test: "hi"
        }
    );
});

module.exports = router;