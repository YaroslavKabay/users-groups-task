const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');

const {usersRoute} = require('./routes');
const {PORT, MONGO_URL} = require('./configs/configs');
// const {mainErrorHandler} = require('./errors');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/users', usersRoute);
// app.use('/groups', applicantsRoute);

// app.use('*', (req, res, next) => {
//     next(new Error('Route not found'));
// });
//
// app.use(mainErrorHandler);

app.listen(PORT, () => {
    console.log('App listen', PORT);
    mongoose.connect(MONGO_URL);
});
//cmnd + opt + l порівняє все