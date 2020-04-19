const mongoose = require('mongoose');

const DB = async () => {
    const getCon = await mongoose.connect('mongodb+srv://test:test@cluster0-gj8ue.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser: true, useUnifiedTopology: true});
    if(getCon) console.log('Got connected!');
}


module.exports = DB;