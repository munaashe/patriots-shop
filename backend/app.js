const express = require('express');
const app = express();

const errorMiddleware = require('./middlewares/errors')

app.use(express.json())

//importing all routes
const products = require('./routes/product')


app.use('/api/v1', products)


//error handling middleware
app.use(errorMiddleware);

module.exports = app