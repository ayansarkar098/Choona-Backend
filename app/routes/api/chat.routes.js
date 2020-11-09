const express = require('express');
const routeLabel = require('route-label');
const router = express.Router();
const namedRouter = routeLabel(router);
const multer = require('multer');
const request_param = multer();
const chatController = require('webservice/chat.controller');


namedRouter.all('/chat*', auth.authenticateAPI);
/**
 * @api {post} /chat/create  Create
 
 * @apiGroup Chat
 * @apiparam {array} receiver_id Receiver Id ['5ed7530b548ea91b52fc65a8','5ed761854f6dbf23d2796a02']
 * @apiHeader (Headers) {String} x-access-token Users unique access-key.
 * @apiSuccessExample {json} Success
 *{
    "status": 200,
    "data": [
        {
            "isActive": true,
            "_id": "5ed7530b548ea91b52fc65a8",
            "sender_id": "5ec2660e9179cfbd1fb06765",
            "receiver_id": "5eb4199ac7d64cd82b33677b",
            "createdAt": "2020-06-03T07:36:43.929Z",
            "__v": 0
        },
        {
            "isActive": true,
            "_id": "5ed761854f6dbf23d2796a02",
            "sender_id": "5ec2660e9179cfbd1fb06765",
            "receiver_id": "5ec24c16865fe216885ed17f",
            "createdAt": "2020-06-03T08:38:29.305Z",
            "__v": 0
        }
    ],
    "message": "Chat saved successfully."
}
*/

namedRouter.post("api.chat.create", '/chat/create', request_param.any(), async (req, res) => {
    try {
        const success = await chatController.create(req, res);
        res.status(success.status).send(success);
    } catch (error) {
        res.status(error.status).send(error);
    }
});
/**
 * @api {get} /chat/list  Get List and last message
 
 * @apiGroup Chat

 * @apiHeader (Headers) {String} x-access-token Users unique access-key.
 * @apiSuccessExample {json} Success
 *{
    "status": 200,
    "data": [
        {
            "-M8yH1eSH88wvCz7IlRD": {
                "artist_name": "DJ Snake, Justin Bieber",
                "message": "COME ON! ",
                "read": false,
                "receiver_id": "5ec2a87ed303c2d04610ac13",
                "sender_id": "5ec2660e9179cfbd1fb06765",
                "song_name": "Let Me Love You",
                "time": "2020-06-04T07:42:38.417Z"
            },
            "user_id": "5ec2a87ed303c2d04610ac13",
            "profile_image": "profile_image_1589885126077_IMG_0008.JPG",
            "full_name": "Rahul Chakraborty",
            "username": "Ezio Auditore"
        }
        
    ],
    "message": "Chat saved successfully."
}
*/
namedRouter.get("api.chat.list", '/chat/list', request_param.any(), async (req, res) => {
    try {
        const success = await chatController.list(req, res);
        res.status(success.status).send(success);
    } catch (error) {
        res.status(error.status).send(error);
    }
});

/**
 * @api {post} /chat/remove Remove message
 
 * @apiGroup Chat
 * @apiparam {string} chatToken Chat Token

 * @apiHeader (Headers) {String} x-access-token Users unique access-key.
 * @apiSuccessExample {json} Success
 *{
    "status": 200,
    "data": [
        {
            "-M8yH1eSH88wvCz7IlRD": {
                "artist_name": "DJ Snake, Justin Bieber",
                "message": "COME ON! ",
                "read": false,
                "receiver_id": "5ec2a87ed303c2d04610ac13",
                "sender_id": "5ec2660e9179cfbd1fb06765",
                "song_name": "Let Me Love You",
                "time": "2020-06-04T07:42:38.417Z"
            },
            "user_id": "5ec2a87ed303c2d04610ac13",
            "profile_image": "profile_image_1589885126077_IMG_0008.JPG",
            "full_name": "Rahul Chakraborty",
            "username": "Ezio Auditore"
        }
        
    ],
    "message": "Chat saved successfully."
}
*/
namedRouter.post("api.chat.remove", '/chat/remove', request_param.any(), async (req, res) => {
    try {
        const success = await chatController.remove(req, res);
        res.status(success.status).send(success);
    } catch (error) {
        res.status(error.status).send(error);
    }
});

/**
 * @api {post} /chat/sendPush Send Push On Child Add
 
 * @apiGroup Chat
 * @apiparam {string} receiver_id Chat Receiver Id

 * @apiHeader (Headers) {String} x-access-token Users unique access-key.
 * @apiSuccessExample {json} Success
 *{
    "status": 200,
    "data": [
        {
            "-M8yH1eSH88wvCz7IlRD": {
                "artist_name": "DJ Snake, Justin Bieber",
                "message": "COME ON! ",
                "read": false,
                "receiver_id": "5ec2a87ed303c2d04610ac13",
                "sender_id": "5ec2660e9179cfbd1fb06765",
                "song_name": "Let Me Love You",
                "time": "2020-06-04T07:42:38.417Z"
            },
            "user_id": "5ec2a87ed303c2d04610ac13",
            "profile_image": "profile_image_1589885126077_IMG_0008.JPG",
            "full_name": "Rahul Chakraborty",
            "username": "Ezio Auditore"
        }
        
    ],
    "message": "Chat saved successfully."
}
*/
namedRouter.post("api.chat.sendPush", '/chat/sendPush', request_param.any(), async (req, res) => {
    try {
        const success = await chatController.sendPush(req, res);
        res.status(success.status).send(success);
    } catch (error) {
        res.status(error.status).send(error);
    }
});


module.exports = router;