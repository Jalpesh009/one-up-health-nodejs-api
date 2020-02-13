const request = require('request');
const config = require('../common/env.config.js');


// // Create the User
exports.postUser = (req, res) => {
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
        url: config.user_url,
        json: true,
        body: req.body
    }, function (error, res1) {
        if (error) {
            return res.status(500).send(error);
        }
        return res.status(200).send(res1.body);
    })
}

// // Update the User
exports.updateUser = (req, res) => {
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
    } else if (!req.body.oneup_user_id) {
        return res.status(400).send({
            message: "You must provide a oneup_user_id to update"
        });
    }

    request.put({
        url: config.user_url,
        json: true,
        body: req.body
    }, function (error, res1) {
        if (error) {
            return res.status(500).send(error);
        }
        return res.status(200).send(res1.body)
    })
}

// // Active/Deactive the User
exports.deactiveUser = (req, res) => {
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
    } else if (!req.body.oneup_user_id) {
        return res.status(400).send({
            message: "You must provide a oneup_user_id to update"
        });
    } else if (!req.body.active) {
        return res.status(400).send({
            message: "Active status is required to update"
        });
    }
    request.put({
        url: config.user_url,
        json: true,
        body: req.body
    }, function (error, res1) {
        if (error) {
            return res.status(500).send(error);
        }
        return res.status(200).send(res1.body)
    })
}