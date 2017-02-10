var express = require('express'),
    router = express.Router(),
    EmployeeSchema = require('../models/Employee');


router.get('/admin', function(req, res) {
 

    res.render('admin.jade', {
            test: "hi"
        }
    );
});

router.post('/admin/submit', function(req, res){
    res.send('thank you!')

    var employeeObject = {
        employeeName: req.body.firstname,
        password: req.body.password,
        number: req.body.number,
        position: req.body.position
    }

    var employee = new EmployeeSchema(employeeObject);

    employee.save(function(err, employeeSave){
        console.log("saved!");
    })

} )

module.exports = router;
