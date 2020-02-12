const mongoose = require('mongoose');

const AuthSchema = mongoose.Schema({
    client_id: String,
    client_secret: String,
    app_user_id: String
});

module.exports = AuthSchema;