const config = require('../config/config');
const mongoose = require('mongoose');
const db = {};
mongoose.Promise = global.Promise;
mongoose.set('strictQuery', false);
db.mongoose = mongoose;
db.url = config.DB_URL;
db.lunettes = require('../api/models/lunette.model')(mongoose);
module.exports = db ;