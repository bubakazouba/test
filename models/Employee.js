var mongoose  = require('mongoose'),
    Schema  = mongoose.Schema,
    ObjectID = require('mongodb').ObjectID

var EmployeeSchema = new Schema({
    employeeName: String,
    password: String,
    number: String,
    position: String,
    
}, {collection: 'Employee'});

module.exports = mongoose.model('Employee', EmployeeSchema);