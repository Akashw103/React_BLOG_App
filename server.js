const express = require('express');
const connectDB = require('./config/db');
const app = express();

connectDB();

app.use(express.json({ extended: false}));

app.get('/', (req, res) => res.send("welcome to app"))

app.use('/api/users', require('./users'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('server Runing')
)