const mongoose = require('mongoose')
const subscriberModel = require('./models/subscribers')
const data = require('./data')
require("dotenv").config();

// Connect to DATABASE
//local uri
//const DATABASE_URL = "mongodb://127.0.0.1:27017/subscribers";

//cluster Uri
const DATABASE_URL=process.env.DATABASE_URI;

mongoose.connect(DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', (err) => console.log(err));
db.once('open', () => console.log('Database created...'));

const refreshAll = async () => {
    await subscriberModel.deleteMany({});
    await subscriberModel.insertMany(data);
    await mongoose.disconnect();
}
refreshAll()