const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json())

app.use((req, res, next) => {
    console.log('new request made');
    console.log('host: ', req.hostname);
    console.log('path: ', req.path);
    console.log('method :', req.method);
    next();
});

app.get('/', (req, res) => {
    res.status(200).json({
        status: 200,
        message: 'Bajaj Node Task Backend Up and Running, Refer Documentation for Use'
    })
})

app.use("/bfhl", require("./api/routers/bfhl"));

app.listen(port, () => {
    console.log('Server Up and Running at Port')
})

module.exports = app;