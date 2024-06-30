const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const  db = require('./Models/Index')


dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/auth',require('./routes/users'))
app.use(cookieParser());
app.get('/', (req, res) => {
    res.send('Hello, World!');
});
const testConnection = async () => {
    try {
         db
        app.listen(PORT, () => console.log(`Server started on ${PORT}`));
    }
    catch (error) {
        console.error('Error connecting to the database: ', error);
    }
};
testConnection();
console.log('welcome and Good bye!!');
