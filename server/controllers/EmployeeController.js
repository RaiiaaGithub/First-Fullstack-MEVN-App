const Employee      = require('../models/Employee')

// Show list of Employees
const index = (req, res, next) => {
    if(req.query.page) {
        Employee.paginate({}, {page: req.query.page, limit: req.query.limit || 5})
            .then(data => {
                res.status(200).json({
                    data
                })
            })
            .catch(error => {
                res.status(400).json({
                    message: 'An error occurred!' + error
                })
            })
    } else {
        Employee.find()
            .then(data => {
                res.status(200).json({
                    data
                })
            })
            .catch(error => {
                res.status(400).json({
                    message: 'An error occurred!' + error
                })
            })
    }
}

// Show one Employee
const show = (req, res, next) => {
    let employeeID = req.body.employeeID
    Employee.findById(employeeID)
        .then(response => {
            res.json({
                response
            })
        })
        .catch(error => {
            res.json({
                message: 'An error ocurred!'
            })
        })
}

// Add Employee
const store = (req, res, next) => {
    let employee = new Employee({
        name: req.body.name,
        designation: req.body.designation,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age
    })
    employee.save()
        .then(response => {
            res.json({
                message: 'Employee added successfully!'
            })
        })
        .catch(error => {
            res.json({
                message: 'An error ocurred!'
            })
        })
}

// Update Employee
const update = (req, res, next) => {
    let employeeID = req.body.employeeID

    let updatedData = {
        name: req.body.name,
        designation: req.body.designation,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age
    }

    Employee.findByIdAndUpdate(employeeID, {$set: updatedData})
        .then(() => {
            res.json({
                message: 'Employee updated successfully!'
            })
        })
        .catch(error => {
            res.json({
                message: 'An error occured!'
            })
        })
}

// Delete Employee
const destroy = (req, res, next) => {
    let employeeID = req.body.employeeID
    Employee.findByIdAndRemove(employeeID)
        .then(() => {
            res.json({
                message: 'Employee deleted successfully!'
            })

        })
        .catch(error => {
            res.json({
                message: 'An error occurred!'
            })
        })
}


module.exports = {
    index, show, store, update, destroy
}