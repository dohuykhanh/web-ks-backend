const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const { connectToDb, db } = require('./db');
const bookingRouter = require('./booking');
app.use(bodyParser.json({ extended: true }));


// app.get('/', (req, res) => {
//     res.json('Hello world')
//     console.log('database', db)
// })

// app.post('/The-Booking', (req, res) => {
//     console.log(req.body)
//     res.status(200);
//     res.json("ok")
// })
app.use(express.json());

app.use('/The-Booking', bookingRouter);


app.listen(3000, () => {
    console.log('App is running on port 3000')
    connectToDb()
})