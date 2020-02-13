const request = require('request');
const config = require('../common/env.config.js');

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
            if (error) {
                return res.status(500).send(error);
            }
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
            if (error) {
                return res.status(500).send(error);
            }
            return res.status(200).send(res1.body);
        });
    }
}

// // Create new Patient
exports.postPatient = (req, res) => {
    if (Object.keys(req.body).length === 0) {
        return res.status(400).send({
            message: "Patient Details is required"
        });
    } else if (!req.body.id) {
        return res.status(400).send({
            message: "Id of patient is required"
        })
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
            if (error) {
                return res.status(500).send(error);
            }
            return res.status(200).send(res1.body);
        });
    }
}

// // Update The Patient Details by using id
exports.updatePatient = (req, res) => {

    if (Object.keys(req.body).length === 0) {
        return res.status(400).send({
            message: "Patient Details is required"
        });
    } else if (!req.body.id) {
        return res.status(400).send({
            message: "Id of patient is required"
        })
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
            if(error) {
                return res.status(500).send(error);
            }
            return res.status(200).send(res1.body);
        });
    }
}

// // // Delete The Patient by using id
exports.deletePatient = (req, res) => {
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
        request.delete({
            url: config.patient_url + '/' + req.params.pId,
            json: true,
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }, function (error, res1) {
            if(error) {
                return res.status(500).send(error);
            }
            return res.status(200).send(res1.body);
        })
    }
}