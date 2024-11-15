const express = require('express');
require('dotenv').config();
const app = express();
const cors = require('cors');
const database = require('./src/database/db.config');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors(  {origin: 'http://localhost:4200'} )); // Activer CORS pour toutes les origines
database.mongoose.connect(database.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to database');
}).catch(err => {
    console.log(err);
});
app.get('/', (req, res) => {
    res.send({ message: 'Hello, World!' });
});
           
require('./src/api/routes/routes')(app);
app.listen(process.env.PORT, () => {
    console.log('Listening on port', process.env.PORT);
});   