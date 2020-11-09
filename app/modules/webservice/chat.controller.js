const mongoose = require("mongoose");
const chatRepo = require('chat/repositories/chat.repository');
const userRepo = require('user/repositories/user.repository');
const express = require("express");
const routeLabel = require("route-label");
const router = express.Router();
const namedRouter = routeLabel(router);
const querystring = require("querystring");

/*for push notification*/
var push = require('push/controllers/push.controller.js');
var FCM = require('fcm-push');
var apn = require('apn');
var serverKey = config.android_serverKey;
var fcm = new FCM(serverKey);
/*end section*/

let admin = require('firebase-admin');
let firbaseAccount = require("../../helper/choona_adminsdk.json");

admin.initializeApp({
    credential: admin.credential.cert(firbaseAccount),
    databaseURL: "https://choona-8db54.firebaseio.com"
});



class chatController {
	constructor() { }
    
    /* 
    // @Method: create
    // @Description: chat create
    */
	async create(req) {
		try {

			let searchData = [];
			const start = async () => {
				await asyncForEach(req.body.receiver_id, async (data) => {
					let chat = await chatRepo.getByField({$or:[
	                          {'sender_id':mongoose.Types.ObjectId(req.user._id), 'receiver_id':mongoose.Types.ObjectId(data)},
	                          {'receiver_id':mongoose.Types.ObjectId(req.user._id),'sender_id':mongoose.Types.ObjectId(data)}
	                        ]});
					if(!_.isEmpty(chat)){
						searchData.push(chat);
					}else{
						let saveChat = await chatRepo.save({sender_id:req.user._id,receiver_id:data});
						searchData.push(saveChat);
					}
				});
			}
              
               
            await start();
            return { status: 200, data: searchData, "message": "Chat saved successfully." };
            async function asyncForEach(array, callback) {
                for (let index = 0; index < array.length; index++) {
                    await callback(array[index], index, array);
                }
            }
			
		}catch (e) {
			return { status: 500, data: [], message: e.message };
		}
    }

    async list(req) {
		try {

			let chatData = [];
			let chat = await chatRepo.getAllByField({ $or: [{'sender_id':mongoose.Types.ObjectId(req.user._id)},{'receiver_id':mongoose.Types.ObjectId(req.user._id)}] });
		
			if(!_.isEmpty(chat)){
				const start = async () => {
				await asyncForEach(chat, async (chatId) => {
					
					 let messagesRef = await admin.database().ref(`chatMessages`);
					 const snapshot = await messagesRef.child(`${chatId._id}`).orderByChild('createdAt').limitToLast(1).once('value');
					 let record = await snapshot.val();

					if(!_.isNull(record)) {
	                    let msgTimestamp = _.pluck(record, 'time')[0];
	                    let receiverId = _.pluck(record, 'receiver_id')[0];
	                    
	                    if(receiverId == req.user._id){
                        	receiverId = _.pluck(record, 'sender_id')[0];
                    	}
                    	record.user_id = receiverId;
                    	let getUserData = await userRepo.getById(receiverId);
                    	
                    	if(!_.isEmpty(getUserData)) {
		                    record.profile_image = getUserData.profile_image;
		                    record.full_name = getUserData.full_name;
		                    record.username = getUserData.username;
		                    record.chat_token = chatId._id;
		                    
		                    chatData.push(record);

                    	}

	                    
	                }


				});
			}
              
               
            await start();
            return { status: 200, data: chatData, "message": "Chat saved successfully." };
            async function asyncForEach(array, callback) {
                for (let index = 0; index < array.length; index++) {
                    await callback(array[index], index, array);
                }
            }
			}else{
				return { status: 201, data:[], "message": "No chat found." };
			}
			
			
		}catch (e) {
			
			return { status: 500, data: [], message: e.message };
		}
    }


    /* 
    // @Method: remove
    // @Description: chat remove
    */
    async remove(req) {
        try {

            let messagesRef = admin.database().ref(`chatMessages/${req.body.chatToken}`);
            let removeMessageThread = await messagesRef.remove();
        
            let deletingUserId = req.user._id;
            let query = { $and: [{ $or: [{ sender_id: deletingUserId }, { receiver_id: deletingUserId }] }, { isActive: true }, { isDeleted: false }, { chat_id: req.body.chatToken }] };
           
            const messagingData = await chatRepo.getByField(query);
            
            if(!messagingData) {
                return { status: 201, data: [], message: 'Invalid Request' };
            }
            
            let deleteMessageingRecord = await messagingRepo.updateById({ isDeleted: false }, messagingData._id);
            return { status: 200, data:[], message: 'Message Thread deleted Successfully' };
            
        }catch (e) {
            return { status: 500, data: [], message: e.message };
        }
    }

    /* 
    // @Method: sendPush
    // @Description: chat sendPush on child added
    */
    async sendPush(req) {
        try {
            let chatRecord = await chatRepo.getByField({ $or: [{ receiver_id: req.user._id, sender_id: req.user._id} ,{ receiver_id: req.user._id, sender_id: req.user._id }] });
           
            let chatToken = '';
            if(chatRecord) {
                chatToken = chatRecord.chat_id;
            }
            let user = await userRepo.getById(mongoose.Types.ObjectId(req.body.receiver_id));
            
            let fromUser = await userRepo.getById(req.user._id);
            
            var device_token = user.deviceToken;
            var device_type = user.deviceType;
            if(device_token!='' && device_type!=''){
                var to = user._id;
                var from = '';
                var badge = parseInt(user.badge_count) + parseInt(1);
                const type = 'messageSent';
                var title = fromUser.full_name + ' sent you a new message';
                var params ={"type":"postComment","text":req.body.song_name + ' - ' +req.body.artist_name};
                var contentAvailable = false;
                let server = push.sendPush("messageSent", device_type, device_token, title,params,from,to,type,badge,contentAvailable);
                return { status: 200, data:[], message: 'Push sent Successfully' };
            }
            
            
        }catch (e) {
            return { status: 500, data: [], message: e.message };
        }
    }
	
}

module.exports = new chatController();

/*For Chat Push Notification*/
let messagesRef = admin.database().ref(`chatMessages`);

messagesRef.orderByChild('createdAt').on("child_added", async function(snapshot) {
    var changedPost = snapshot.val();

    var keys1 = Object.keys(snapshot.val()||{});
    var lastIdInSnapshot1 = keys1[keys1.length-1]
    //console.log(lastIdInSnapshot1);
    if(!_.isEmpty(snapshot.val()[lastIdInSnapshot1])){
        let document = snapshot.val()[lastIdInSnapshot1];
          
        if (document.read == false || document.read == 'false') {
            let chatRecord = await chatRepo.getByField({ $or: [{ receiver_id: document.receiver_id, sender_id: document.sender_id } ,{ receiver_id: document.sender_id, sender_id: document.receiver_id  }] });
           
            let chatToken = '';
            if(chatRecord) {
                chatToken = chatRecord.chat_id;
            }
            let user = await userRepo.getById(document.receiver_id);
            
            let fromUser = await userRepo.getById(document.sender_id);
            
            var device_token = user.deviceToken;
            var device_type = user.deviceType;
            if(device_token!='' && device_type!=''){
                var to = user._id;
                var from = '';
                var badge = parseInt(user.badge_count) + parseInt(1);
                const type = 'messageSent';
                var title = fromUser.full_name + ' sent you a new message';
                var params ={"type":"postComment","text":document.song_name + ' - ' +document.artist_name};
                var contentAvailable = false;
                let server = push.sendPush("messageSent", device_type, device_token, title,params,from,to,type,badge,contentAvailable);
            }
            
        }
    }
});


/*on child change*/
messagesRef.orderByChild('createdAt').on("child_changed", async function(snapshot) {
    var changedPost = snapshot.val();

    var keys1 = Object.keys(snapshot.val()||{});
    var lastIdInSnapshot1 = keys1[keys1.length-1]
    //console.log(lastIdInSnapshot1);
    if(!_.isEmpty(snapshot.val()[lastIdInSnapshot1])){
        let document = snapshot.val()[lastIdInSnapshot1];
          
        if (document.read == false || document.read == 'false') {
            let chatRecord = await chatRepo.getByField({ $or: [{ receiver_id: document.receiver_id, sender_id: document.sender_id } ,{ receiver_id: document.sender_id, sender_id: document.receiver_id  }] });
           
            let chatToken = '';
            if(chatRecord) {
                chatToken = chatRecord.chat_id;
            }
            let user = await userRepo.getById(document.receiver_id);
            
            let fromUser = await userRepo.getById(document.sender_id);
            
            var device_token = user.deviceToken;
            var device_type = user.deviceType;
            if(device_token!='' && device_type!=''){
                var to = user._id;
                var from = '';
                var badge = parseInt(user.badge_count) + parseInt(1);
                const type = 'messageSent';
                var title = fromUser.full_name + ' sent you a new message';
                var params ={"type":"postComment","text":document.song_name + ' - '+document.artist_name};
                var contentAvailable = false;
                let server = push.sendPush("messageSent", device_type, device_token, title,params,from,to,type,badge,contentAvailable);
            }
            
        }
    }
});

/*End chat push notification section*/
