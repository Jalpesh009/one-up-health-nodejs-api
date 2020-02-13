const mongoose = require('mongoose');



const CodeSchema = mongoose.Schema({
    client_id : String,
    client_secret : String,
    app_user_id : String
});

const TokenSchema = mongoose.Schema({
    client_id : String,
    client_secret : String,
    app_user_id : String,
    grant_type : 'authorization_code'
});

const PatientSchema  = mongoose.Schema({
    
        resourceType: String,
        birthDate: String,
        id : String,
        gender:String
    
});