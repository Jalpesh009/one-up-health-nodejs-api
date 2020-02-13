const request = require('request');
const config = require('../common/env.config.js');

// // Generate Code for get the token
exports.getCode = (req, res) => {
    if (Object.keys(req.body).length === 0) {
        return res.status(400).send({
            message: "User Details is required"
        });
    } else if (!req.body.client_id) {
        return res.status(403).send({
            message: "Client id is required"
        });
    } else if (!req.body.client_secret) {
        return res.status(403).send({
            message: "Client Secret Key is required"
        });
    } else if (!req.body.app_user_id) {
        return res.status(400).send({
            message: "App user id is required"
        });
    }

    request.post({
        url: config.auth_url,
        body: req.body,
        json: true
    }, function (error, res1) {
        if (error) {
            return res.status(500).send(error);
        }
        return res.status(200).send(res1.body);
    });

}

// // Generate Access Token
exports.getToken = (req, res) => {
    if (Object.keys(req.body).length === 0) {
        return res.status(400).send({
            message: "User Details is required"
        });
    } else if (!req.body.client_id) {
        return res.status(403).send({
            message: "Client id is required"
        });
    } else if (!req.body.client_secret) {
        return res.status(403).send({
            message: "Client Secret Key is required"
        });
    } else if (!req.body.code) {
        return res.status(400).send({
            message: "Code is required to get the token"
        });
    }

    req.body.grant_type = config.grant_type;
    request.post({
        url: config.token_url,
        body: req.body,
        json: true
    }, function (error, res1) {
        if (error) {
            return res.status(500).send(error);
        }
        return res.status(200).send(res1.body);
    });
}
