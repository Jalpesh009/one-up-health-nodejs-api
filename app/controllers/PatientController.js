const Auth = require('../models/auth.model.js');
const request = require('request');
const config = require('../common/env.config.js');


// // Generate Code for get the token
exports.getCode = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Credential can not be empty"
        });
    }

    request.post({
        url: config.auth_url,
        body: req.body,
        json: true
    }, function (error, res1) {
        return res.status(200).send(res1.body);
    });

}

// // Generate Access Token
exports.getToken = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: 'Credentials can not be empty'
        });
    }
    req.body.grant_type = config.grant_type;
    request.post({
        url: config.token_url,
        body: req.body,
        json: true
    }, function (error, res1) {
        return res.status(200).send(res1.body);
    });
}

// // Get All The Patient Details
exports.getAllPatients = (req, res) => {
    let token = req.headers['x-access-token'] || req.headers['authorization'];
    if (token === undefined || token == '') {
        return res.status(400).json({
            success: false,
            message: "Please provide the token"
        });
    }
    if (token.startsWith('Bearer ')) {
        token = token.slice(7, token.length);
    }

    if (token) {
        request.get({
            url: config.patient_url,
            json: true,
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }, function (error, res1) {
            return res.status(200).send(res1.body);
        });
    } else {
        return res.status(400).send({
            message: "Token is not supplied"
        });
    }
}

// // Get Particular Patient Details by id
exports.getPatient = (req, res) => {
    let token = req.headers['x-access-token'] || req.headers['authorization'];
    if (token === undefined || token == '') {
        return res.status(400).json({
            success: false,
            message: "Please provide the token"
        });
    }
    if (token.startsWith('Bearer ')) {
        token = token.slice(7, token.length);
    }

    if (token) {
        request.get({
            url: config.patient_url + '/' + req.params.pId,
            json: true,
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }, function (error, res1) {
            return res.status(200).send(res1.body);
        });
    }
}

// // Create new Patient
exports.postPatient = (req, res) => {
    if (!req.body.content) {
        return res.status(400).send({
            message: 'Patient Details can not be empty'
        });
    }
    let token = req.headers['x-access-token'] || req.headers['authorization'];
    if (token === undefined || token == '') {
        return res.status(400).json({
            success: false,
            message: "Please provide the token"
        });
    }
    if (token.startsWith('Bearer ')) {
        token = token.slice(7, token.length);
    }
    if (token) {
        request.post({
            url: config.patient_url,
            json: true,
            body: req.body,
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }, function (error, res1) {
            return res.status(200).send(res1.body);
        });
    }
}

// // Update The Patient Details by using id
exports.updatePatient = (req, res) => {
    if (!req.body.content) {
        if(!req.body.id) {
            return res.status(400).send({
                message : 'Patient id must be required'
            })
        }
        return res.status(400).send({
            message: 'Patient Details can not be empty'
        });
    } 
    let token = req.headers['x-access-token'] || req.headers['authorization'];
    if (token === undefined || token == '') {
        return res.status(400).json({
            success: false,
            message: "Please provide the token"
        });
    }
    if (token.startsWith('Bearer ')) {
        token = token.slice(7, token.length);
    }

    if (token) {
        request.put({
            url: config.patient_url + '/' + req.params.pId,
            json: true,
            body: req.body,
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }, function (error, res1) {
            return res.status(200).send(res1.body);
        });
    }
}

// // Delete The Patient by using id
exports.deletePatient = (req,res) => {
    let token = req.headers['x-access-token'] || req.headers['authorization'];
    if (token === undefined || token == '') {
        return res.status(400).json({
            success: false,
            message: "Please provide the token"
        });
    }
    if (token.startsWith('Bearer ')) {
        token = token.slice(7, token.length);
    }

    if(token) {
        request.delete({
            url : config.patient_url + '/' + req.params.pId,
            json : true,
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }, function (error,res1) {
            return res.status(200).send(res1.body);
        })
    }
}