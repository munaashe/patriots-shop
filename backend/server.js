const req = require('express/lib/request');
const connectDatabase = require('./config/database')
const app = require('./app');

const dotenv = require('dotenv')

dotenv.config({ path: 'backend/config/config.env' })


//database connect
connectDatabase();

app.listen(process.env.PORT, () => {
    console.log(`server has started on port: ${process.env.PORT} in ${process.env.NODE_ENV} environment`)
}) 