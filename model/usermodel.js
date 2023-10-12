var mongoose = require('mongoose');

// schema

var user_schema = new mongoose.Schema({
    name: {
        type: String,
    },
    mention: {
        type: String,
    },
    image: {
        type: String,
    },
    desc: {
        type: String
    }

});

// model

module.exports = mongoose.model('user',user_schema);