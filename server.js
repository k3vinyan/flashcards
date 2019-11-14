const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

global.Card = require('./api/models/cardModel');
const routes = require('./api/routes/cardRoutes');

mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', false);
mongoose.connect(
    'mongodb+srv://k3vinyan:'+ process.env.DB_PW + '@cluster0-l8nu1.mongodb.net/test?retryWrites=true&w=majority',
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true 
    }
);

const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);
app.listen(port);

app.use('/', (req, res) => {
    res.status(404).send({ url: `${req.originalUrl} not found`})
})

console.log(`Server started on port ${port}`);