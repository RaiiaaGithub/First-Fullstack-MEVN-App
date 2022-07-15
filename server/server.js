const express       = require('express')
const mongoose      = require('mongoose')
const morgan        = require('morgan')
const bodyParser    = require('body-parser')
const cors          = require('cors')

// Routes Import
const EmployeeRoute = require('./routes/employee')
const AuthRoute = require('./routes/auth')

// DB CONNECTION
// Mudar a pass e o user
mongoose.connect(process.env.DB_URI, {useNewUrlParser: true, useUnifiedTopology: true, dbName: 'joaobaiaDB'})
const db = mongoose.connection

db.on('error', (err) => {
    console.log(err)
})

db.once('open', () => {
    console.log('Database Connection Established!');
})


// SERVER
const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is tunning on port ${PORT}`)
})



// Routes
app.use('/api/employee', EmployeeRoute)
app.use('/api', AuthRoute)
app.get('/', (req, res) => {
    res.json({
        message: 'OLA'
    })
})