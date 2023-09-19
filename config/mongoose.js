const mongoose = require('mongoose');
// mongoose.connect('mongodb+srv://127.0.0.1/Mongodb-Database');
mongoose.connect('mongodb+srv://rahulverma9559:pWfzCo7RU2pSSCir@cluster0.7sa8r47.mongodb.net/?retryWrites=true&w=majority');
const db = mongoose.connection;
// error
db.on('error', console.error.bind(console, 'erroe connecting to db'));
// up and running then message
db.once('open', function() {
    console.log('Success fully connected to the database')
})