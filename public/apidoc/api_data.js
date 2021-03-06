define({ "api": [
  {
    "type": "get",
    "url": "/activity/list",
    "title": "My Activity List",
    "group": "Activity",
    "header": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique access-key.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"status\": 200,\n    \"data\": [\n        {\n            \"_id\": \"5eb538f5521e0638a5bceadb\",\n            \"full_name\": \"Jhon doe\",\n            \"profile_image\": \"profile_image_1588848830991_tst.jpg\",\n            \"username\": \"spotify\",\n            \"user_id\": \"5eb3e8bfc26a203c69957603\",\n            \"activity_type\": \"following\",\n            \"created_at\": null\n        }\n    ],\n    \"message\": \"Your activities fetched successfully.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routes/api/activity.routes.js",
    "groupTitle": "Activity",
    "name": "GetActivityList"
  },
  {
    "type": "get",
    "url": "/applemusic/token",
    "title": "Token applemusic",
    "group": "Activity",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"status\": 200,\n    \"token\": \"eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjdYR01CU1VaN0gifQ.eyJpYXQiOjE1ODk4OTYzODEsImV4cCI6MTU4OTg5OTk4MSwiaXNzIjoiSDIzVzNFRVJMSyJ9.cCxZTKN1Rb56-M0JoAkl3R9TZwoq7Tl05YVRrg-G68CVMSNB_xE93wGBWvhRaIoDQ1FRgtS_9JCo2jj2o8VjIA\",\n    \"token_exp\": \"2020-05-19T14:53:01.891Z\",\n    \"message\": \"Success\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routes/api/applemusic.routes.js",
    "groupTitle": "Activity",
    "name": "GetApplemusicToken"
  },
  {
    "type": "get",
    "url": "/chat/list",
    "title": "Get List and last message",
    "group": "Chat",
    "header": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique access-key.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"status\": 200,\n    \"data\": [\n        {\n            \"-M8yH1eSH88wvCz7IlRD\": {\n                \"artist_name\": \"DJ Snake, Justin Bieber\",\n                \"message\": \"COME ON! \",\n                \"read\": false,\n                \"receiver_id\": \"5ec2a87ed303c2d04610ac13\",\n                \"sender_id\": \"5ec2660e9179cfbd1fb06765\",\n                \"song_name\": \"Let Me Love You\",\n                \"time\": \"2020-06-04T07:42:38.417Z\"\n            },\n            \"user_id\": \"5ec2a87ed303c2d04610ac13\",\n            \"profile_image\": \"profile_image_1589885126077_IMG_0008.JPG\",\n            \"full_name\": \"Rahul Chakraborty\",\n            \"username\": \"Ezio Auditore\"\n        }\n        \n    ],\n    \"message\": \"Chat saved successfully.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routes/api/chat.routes.js",
    "groupTitle": "Chat",
    "name": "GetChatList"
  },
  {
    "type": "post",
    "url": "/chat/create",
    "title": "Create",
    "group": "Chat",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "receiver_id",
            "description": "<p>Receiver Id ['5ed7530b548ea91b52fc65a8','5ed761854f6dbf23d2796a02']</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique access-key.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"status\": 200,\n    \"data\": [\n        {\n            \"isActive\": true,\n            \"_id\": \"5ed7530b548ea91b52fc65a8\",\n            \"sender_id\": \"5ec2660e9179cfbd1fb06765\",\n            \"receiver_id\": \"5eb4199ac7d64cd82b33677b\",\n            \"createdAt\": \"2020-06-03T07:36:43.929Z\",\n            \"__v\": 0\n        },\n        {\n            \"isActive\": true,\n            \"_id\": \"5ed761854f6dbf23d2796a02\",\n            \"sender_id\": \"5ec2660e9179cfbd1fb06765\",\n            \"receiver_id\": \"5ec24c16865fe216885ed17f\",\n            \"createdAt\": \"2020-06-03T08:38:29.305Z\",\n            \"__v\": 0\n        }\n    ],\n    \"message\": \"Chat saved successfully.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routes/api/chat.routes.js",
    "groupTitle": "Chat",
    "name": "PostChatCreate"
  },
  {
    "type": "post",
    "url": "/chat/remove",
    "title": "Remove message",
    "group": "Chat",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chatToken",
            "description": "<p>Chat Token</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique access-key.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"status\": 200,\n    \"data\": [\n        {\n            \"-M8yH1eSH88wvCz7IlRD\": {\n                \"artist_name\": \"DJ Snake, Justin Bieber\",\n                \"message\": \"COME ON! \",\n                \"read\": false,\n                \"receiver_id\": \"5ec2a87ed303c2d04610ac13\",\n                \"sender_id\": \"5ec2660e9179cfbd1fb06765\",\n                \"song_name\": \"Let Me Love You\",\n                \"time\": \"2020-06-04T07:42:38.417Z\"\n            },\n            \"user_id\": \"5ec2a87ed303c2d04610ac13\",\n            \"profile_image\": \"profile_image_1589885126077_IMG_0008.JPG\",\n            \"full_name\": \"Rahul Chakraborty\",\n            \"username\": \"Ezio Auditore\"\n        }\n        \n    ],\n    \"message\": \"Chat saved successfully.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routes/api/chat.routes.js",
    "groupTitle": "Chat",
    "name": "PostChatRemove"
  },
  {
    "type": "get",
    "url": "/country-code/list",
    "title": "Country Code List",
    "group": "Country_Code",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"status\": 200,\n    \"data\": [\n        {\n            \"name\": \"Canada\",\n            \"dial_code\": \"+1\",\n            \"code\": \"CA\",\n            \"flag\": \"🇨🇦\",\n            \"isActive\": true,\n            \"_id\": \"5f2be241f4469110c871fbeb\",\n            \"createdAt\": \"2020-08-06T11:34:02.031Z\"\n        },\n        {\n            \"name\": \"United States\",\n            \"dial_code\": \"+1\",\n            \"code\": \"US\",\n            \"flag\": \"🇺🇸\",\n            \"isActive\": true,\n            \"_id\": \"5f2be247f4469110c871fdfc\",\n            \"createdAt\": \"2020-08-06T11:34:02.032Z\"\n        },\n        {\n            \"name\": \"Bahamas\",\n            \"dial_code\": \"+1242\",\n            \"code\": \"BS\",\n            \"flag\": \"🇧🇸\",\n            \"isActive\": true,\n            \"_id\": \"5f2be240f4469110c871fbaf\",\n            \"createdAt\": \"2020-08-06T11:34:02.032Z\"\n        },\n        {\n            \"name\": \"Barbados\",\n            \"dial_code\": \"+1246\",\n            \"code\": \"BB\",\n            \"flag\": \"🇧🇧\",\n            \"isActive\": true,\n            \"_id\": \"5f2be241f4469110c871fbb9\",\n            \"createdAt\": \"2020-08-06T11:34:02.032Z\"\n        },\n        {\n            \"name\": \"Anguilla\",\n            \"dial_code\": \"+1264\",\n            \"code\": \"AI\",\n            \"flag\": \"🇦🇮\",\n            \"isActive\": true,\n            \"_id\": \"5f2be240f4469110c871fb96\",\n            \"createdAt\": \"2020-08-06T11:34:02.032Z\"\n        },\n        {\n            \"name\": \"Antigua and Barbuda\",\n            \"dial_code\": \"+1268\",\n            \"code\": \"AG\",\n            \"flag\": \"🇦🇬\",\n            \"isActive\": true,\n            \"_id\": \"5f2be240f4469110c871fb9a\",\n            \"createdAt\": \"2020-08-06T11:34:02.032Z\"\n        },\n        {\n            \"name\": \"Virgin Islands, British\",\n            \"dial_code\": \"+1284\",\n            \"code\": \"VG\",\n            \"flag\": \"🇻🇬\",\n            \"isActive\": true,\n            \"_id\": \"5f2be249f4469110c871feb4\",\n            \"createdAt\": \"2020-08-06T11:34:02.032Z\"\n        },\n        {\n            \"name\": \"Virgin Islands, U.S.\",\n            \"dial_code\": \"+1340\",\n            \"code\": \"VI\",\n            \"flag\": \"🇻🇮\",\n            \"isActive\": true,\n            \"_id\": \"5f2be249f4469110c871feb7\",\n            \"createdAt\": \"2020-08-06T11:34:02.032Z\"\n        },\n        {\n            \"name\": \"Bermuda\",\n            \"dial_code\": \"+1441\",\n            \"code\": \"BM\",\n            \"flag\": \"🇧🇲\",\n            \"isActive\": true,\n            \"_id\": \"5f2be241f4469110c871fbc8\",\n            \"createdAt\": \"2020-08-06T11:34:02.033Z\"\n        },\n        {\n            \"name\": \"Grenada\",\n            \"dial_code\": \"+1473\",\n            \"code\": \"GD\",\n            \"flag\": \"🇬🇩\",\n            \"isActive\": true,\n            \"_id\": \"5f2be243f4469110c871fc8a\",\n            \"createdAt\": \"2020-08-06T11:34:02.033Z\"\n        },\n        {\n            \"name\": \"Turks and Caicos Islands\",\n            \"dial_code\": \"+1649\",\n            \"code\": \"TC\",\n            \"flag\": \"🇹🇨\",\n            \"isActive\": true,\n            \"_id\": \"5f2be247f4469110c871fdea\",\n            \"createdAt\": \"2020-08-06T11:34:02.033Z\"\n        },\n        {\n            \"name\": \"Montserrat\",\n            \"dial_code\": \"+1664\",\n            \"code\": \"MS\",\n            \"flag\": \"🇲🇸\",\n            \"isActive\": true,\n            \"_id\": \"5f2be245f4469110c871fd1f\",\n            \"createdAt\": \"2020-08-06T11:34:02.033Z\"\n        },\n        {\n            \"name\": \"Northern Mariana Islands\",\n            \"dial_code\": \"+1670\",\n            \"code\": \"MP\",\n            \"flag\": \"🇲🇵\",\n            \"isActive\": true,\n            \"_id\": \"5f2be245f4469110c871fd4e\",\n            \"createdAt\": \"2020-08-06T11:34:02.033Z\"\n        },\n        {\n            \"name\": \"Guam\",\n            \"dial_code\": \"+1671\",\n            \"code\": \"GU\",\n            \"flag\": \"🇬🇺\",\n            \"isActive\": true,\n            \"_id\": \"5f2be243f4469110c871fc90\",\n            \"createdAt\": \"2020-08-06T11:34:02.033Z\"\n        },\n        {\n            \"name\": \"AmericanSamoa\",\n            \"dial_code\": \"+1684\",\n            \"code\": \"AS\",\n            \"flag\": \"🇦🇸\",\n            \"isActive\": true,\n            \"_id\": \"5f2be240f4469110c871fb8c\",\n            \"createdAt\": \"2020-08-06T11:34:02.033Z\"\n        },\n        {\n            \"name\": \"Saint Lucia\",\n            \"dial_code\": \"+1758\",\n            \"code\": \"LC\",\n            \"flag\": \"🇱🇨\",\n            \"isActive\": true,\n            \"_id\": \"5f2be249f4469110c871fe8a\",\n            \"createdAt\": \"2020-08-06T11:34:02.033Z\"\n        },\n        {\n            \"name\": \"Dominica\",\n            \"dial_code\": \"+1767\",\n            \"code\": \"DM\",\n            \"flag\": \"🇩🇲\",\n            \"isActive\": true,\n            \"_id\": \"5f2be242f4469110c871fc26\",\n            \"createdAt\": \"2020-08-06T11:34:02.034Z\"\n        },\n        {\n            \"name\": \"Saint Vincent and the Grenadines\",\n            \"dial_code\": \"+1784\",\n            \"code\": \"VC\",\n            \"flag\": \"🇻🇨\",\n            \"isActive\": true,\n            \"_id\": \"5f2be249f4469110c871fe93\",\n            \"createdAt\": \"2020-08-06T11:34:02.034Z\"\n        },\n        {\n            \"name\": \"Dominican Republic\",\n            \"dial_code\": \"+1849\",\n            \"code\": \"DO\",\n            \"flag\": \"🇩🇴\",\n            \"isActive\": true,\n            \"_id\": \"5f2be242f4469110c871fc29\",\n            \"createdAt\": \"2020-08-06T11:34:02.034Z\"\n        },\n        {\n            \"name\": \"Trinidad and Tobago\",\n            \"dial_code\": \"+1868\",\n            \"code\": \"TT\",\n            \"flag\": \"🇹🇹\",\n            \"isActive\": true,\n            \"_id\": \"5f2be247f4469110c871fdde\",\n            \"createdAt\": \"2020-08-06T11:34:02.034Z\"\n        },\n        {\n            \"name\": \"Saint Kitts and Nevis\",\n            \"dial_code\": \"+1869\",\n            \"code\": \"KN\",\n            \"flag\": \"🇰🇳\",\n            \"isActive\": true,\n            \"_id\": \"5f2be248f4469110c871fe87\",\n            \"createdAt\": \"2020-08-06T11:34:02.034Z\"\n        },\n        {\n            \"name\": \"Jamaica\",\n            \"dial_code\": \"+1876\",\n            \"code\": \"JM\",\n            \"flag\": \"🇯🇲\",\n            \"isActive\": true,\n            \"_id\": \"5f2be244f4469110c871fcc0\",\n            \"createdAt\": \"2020-08-06T11:34:02.034Z\"\n        },\n        {\n            \"name\": \"Puerto Rico\",\n            \"dial_code\": \"+1939\",\n            \"code\": \"PR\",\n            \"flag\": \"🇵🇷\",\n            \"isActive\": true,\n            \"_id\": \"5f2be246f4469110c871fd73\",\n            \"createdAt\": \"2020-08-06T11:34:02.034Z\"\n        }\n    ],\n    \"message\": \"Your countryCodes fetched successfully.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routes/api/countryCode.routes.js",
    "groupTitle": "Country_Code",
    "name": "GetCountryCodeList"
  },
  {
    "type": "get",
    "url": "/post/delete/:id",
    "title": "Delete",
    "group": "Post",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>Post _id</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique access-key.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"status\": 200,\n    \"data\": {\n        \"n\": 1,\n        \"ok\": 1,\n        \"deletedCount\": 1\n    },\n    \"message\": \"Your post is deleted successfully.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routes/api/post.routes.js",
    "groupTitle": "Post",
    "name": "GetPostDeleteId"
  },
  {
    "type": "get",
    "url": "/post/details/:id",
    "title": "Post Details",
    "group": "Post",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>Post _id</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique access-key.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"status\": 200,\n    \"data\": {\n        \"social_type\": \"spotify\",\n        \"post_content\": \"Yeah! \",\n        \"song_uri\": \"https://p.scdn.co/mp3-preview/d7369d506a0647ccd433c7d0ec290d8be52c186f?cid=c771eeb07b694b2bbf774cb3aa93bc65\",\n        \"original_song_uri\": \"https://open.spotify.com/track/5cF0dROlMOK5uNZtivgu50\",\n        \"genre\": \"\",\n        \"song_name\": \"Attention\",\n        \"song_image\": \"https://i.scdn.co/image/ab67616d0000b273897f73256b9128a9d70eaf66\",\n        \"artist_name\": \"Charlie Puth\",\n        \"album_name\": \"Voicenotes\",\n        \"album_image\": \"\",\n        \"comment\": [\n            {\n                \"user_id\": \"5f36b59c7cbe9a2baddc87bb\",\n                \"text\": \"Yeahhhhhhh\",\n                \"username\": \"Ezio Auditore\",\n                \"_id\": \"5f36b7a17cbe9a2baddc87cd\",\n                \"createdAt\": \"2020-08-14T16:11:13+00:00\"\n            }\n        ],\n        \"reaction\": [\n            {\n                \"user_id\": \"5f36b59c7cbe9a2baddc87bb\",\n                \"text\": \"🔥\",\n                \"username\": \"Ezio Auditore\",\n                \"_id\": \"5f36b7577cbe9a2baddc87c9\",\n                \"createdAt\": \"2020-08-14T16:09:59+00:00\"\n            },\n            {\n                \"user_id\": \"5f36b59c7cbe9a2baddc87bb\",\n                \"text\": \"🕺\",\n                \"username\": \"Ezio Auditore\",\n                \"_id\": \"5f36b76e7cbe9a2baddc87cb\",\n                \"createdAt\": \"2020-08-14T16:10:22+00:00\"\n            },\n            {\n                \"user_id\": \"5f3b8a2200dd425036545b77\",\n                \"text\": \"💃\",\n                \"username\": \"Apple\",\n                \"_id\": \"5f3e3235558917f39543f4cf\",\n                \"createdAt\": \"2020-08-20T08:20:05+00:00\"\n            },\n            {\n                \"user_id\": \"5f3b8a2200dd425036545b77\",\n                \"text\": \"😍\",\n                \"username\": \"Apple\",\n                \"_id\": \"5f3e3500558917f39543f4d9\",\n                \"createdAt\": \"2020-08-20T08:32:00+00:00\"\n            }\n        ],\n        \"isrc_code\": \"\",\n        \"isActive\": true,\n        \"_id\": \"5f36b7467cbe9a2baddc87c8\",\n        \"user_id\": \"5f36b6557cbe9a2baddc87bc\",\n        \"createdAt\": \"2020-08-14T16:09:42.474Z\",\n        \"__v\": 0\n    },\n    \"message\": \"Your post saved successfully.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routes/api/post.routes.js",
    "groupTitle": "Post",
    "name": "GetPostDetailsId"
  },
  {
    "type": "get",
    "url": "/post/list",
    "title": "List",
    "group": "Post",
    "header": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique access-key.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"status\": 200,\n    \"data\": [\n        {\n            \"_id\": \"5ec4f3d5b7449d6d26701f81\",\n            \"social_type\": \"apple\",\n            \"post_content\": \"Great my Song! 🍟🍟\",\n            \"song_uri\": \"https://audio-ssl.itunes.apple.com/itunes-assets/Music/c5/91/81/mzm.uiokdqnc.aac.p.m4a\",\n            \"song_name\": \"Iktara\",\n            \"song_image\": \"https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/38/3d/95/383d95e8-6e44-8090-4d52-ed9daf26374c/source/100x100bb.jpg\",\n            \"artist_name\": \"Amit Trivedi, Kavita Seth & Amitabh Bhattacharya\",\n            \"album_name\": \"Wake Up Sid (Original Motion Picture Soundtrack)\",\n            \"album_image\": \"\",\n            \"user_id\": \"5ec4f365b7449d6d26701f80\",\n            \"createdAt\": \"2020-05-20T09:09:41.810Z\",\n            \"__v\": 0,\n            \"userDetails\": {\n                \"_id\": \"5ec4f365b7449d6d26701f80\",\n                \"full_name\": \"Ranbir Kapoor\",\n                \"username\": \"KingKapoor\",\n                \"social_username\": \"Prithviraj\",\n                \"email\": \"ghpfjv4ea6@privaterelay.appleid.com\",\n                \"password\": \"\",\n                \"profile_image\": \"profile_image_1589965669127_IMG_0007.JPG\",\n                \"location\": \"Mumbai, India\",\n                \"social_id\": \"000622.f54f4b43fe5f47f39faec1fde0505277.0656\",\n                \"register_type\": \"apple\",\n                \"isDeleted\": false,\n                \"deviceToken\": \"123456\",\n                \"deviceType\": \"ios\",\n                \"isActive\": true,\n                \"role\": \"5ea174d3c7d64cd82bddd490\",\n                \"createdAt\": \"2020-05-20T09:07:49.384Z\",\n                \"updatedAt\": \"2020-05-20T09:07:49.384Z\"\n            }\n        }\n    ],\n    \"message\": \"Your post fetched successfully.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routes/api/post.routes.js",
    "groupTitle": "Post",
    "name": "GetPostList"
  },
  {
    "type": "get",
    "url": "/post/topfifty",
    "title": "Top 50 Post/Song",
    "group": "Post",
    "header": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique access-key.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"status\": 200,\n    \"data\": [\n        {\n            \"_id\": \"Believer\",\n            \"song_image\": \"https://i.scdn.co/image/ab67616d0000b2735675e83f707f1d7271e5cf8a\",\n            \"count\": 3\n        },\n        {\n            \"_id\": \"I'm the One (feat. Justin Bieber, Quavo, Chance the Rapper & Lil Wayne)\",\n            \"song_image\": \"https://i.scdn.co/image/ab67616d0000b273dcb6a73da1e7f293b875f69c\",\n            \"count\": 1\n        },\n        {\n            \"_id\": \"Vaaste\",\n            \"song_image\": \"https://i.scdn.co/image/ab67616d0000b2738dce351c5e4a62c2ea2dd498\",\n            \"count\": 1\n        },\n        {\n            \"_id\": \"Do I Wanna Know?\",\n            \"song_image\": \"https://is3-ssl.mzstatic.com/image/thumb/Music/v4/d7/ad/82/d7ad8214-a767-d275-8a20-f7359e3ac65d/source/100x100bb.jpg\",\n            \"count\": 1\n        }\n    ],\n    \"message\": \"Top 50 post fetched successfully.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routes/api/post.routes.js",
    "groupTitle": "Post",
    "name": "GetPostTopfifty"
  },
  {
    "type": "get",
    "url": "/post/topfifty",
    "title": "top 50 post",
    "group": "Post",
    "header": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique access-key.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"status\": 200,\n    \"data\": {\n        \"n\": 1,\n        \"ok\": 1,\n        \"deletedCount\": 1\n    },\n    \"message\": \"Your post is fetched successfully.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routes/api/post.routes.js",
    "groupTitle": "Post",
    "name": "GetPostTopfifty"
  },
  {
    "type": "post",
    "url": "/post/comment",
    "title": "Comment",
    "group": "Post",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "post_id",
            "description": "<p>Post Id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "text",
            "description": "<p>Comment</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique access-key.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"status\": 200,\n    \"data\": {\n        \"social_type\": \"spotify\",\n        \"post_content\": \"YES\",\n        \"song_uri\": null,\n        \"song_name\": \"Memories\",\n        \"song_image\": \"https://i.scdn.co/image/ab67616d0000b273b8c0135a218de2d10a8435f5\",\n        \"artist_name\": \"Maroon 5\",\n        \"album_name\": \"Memories\",\n        \"album_image\": \"\",\n        \"comment\": [\n            {\n                \"user_id\": \"5eb3e8bfc26a203c69957603\",\n                \"text\": \"this is test comment\",\n                \"profile_image\": \"profile_image_1588848830991_tst.jpg\",\n                \"username\": \"spotify\",\n                \"_id\": \"5ecd2c852be4ff55da0437b8\",\n                \"createdAt\": \"2020-05-26T20:19:41+05:30\"\n            }\n        ],\n        \"isActive\": true,\n        \"_id\": \"5ecd16a8759fc49945cfc699\",\n        \"user_id\": \"5ec2660e9179cfbd1fb06765\",\n        \"createdAt\": \"2020-05-26T13:16:24.644Z\",\n        \"__v\": 0\n    },\n    \"message\": \"Comment saved successfully.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routes/api/post.routes.js",
    "groupTitle": "Post",
    "name": "PostPostComment"
  },
  {
    "type": "post",
    "url": "/post/reaction",
    "title": "Reaction",
    "group": "Post",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "post_id",
            "description": "<p>Post Id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "text",
            "description": "<p>reaction</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique access-key.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"status\": 200,\n    \"data\": {\n        \"social_type\": \"spotify\",\n        \"post_content\": \"YES\",\n        \"song_uri\": null,\n        \"song_name\": \"Memories\",\n        \"song_image\": \"https://i.scdn.co/image/ab67616d0000b273b8c0135a218de2d10a8435f5\",\n        \"artist_name\": \"Maroon 5\",\n        \"album_name\": \"Memories\",\n        \"album_image\": \"\",\n        \"comment\": [\n            {\n                \"user_id\": \"5eb3e8bfc26a203c69957603\",\n                \"text\": \"this is test comment\",\n                \"profile_image\": \"profile_image_1588848830991_tst.jpg\",\n                \"username\": \"spotify\",\n                \"_id\": \"5ecd2c852be4ff55da0437b8\",\n                \"createdAt\": \"2020-05-26T20:19:41+05:30\"\n            },\n            {\n                \"user_id\": \"5ec2a87ed303c2d04610ac13\",\n                \"text\": \"Adam Levine is awesome\",\n                \"profile_image\": \"profile_image_1589885126077_IMG_0008.JPG\",\n                \"username\": \"Ezio Auditore\",\n                \"_id\": \"5ece1bd317d49cdba30e843a\",\n                \"createdAt\": \"2020-05-27T07:50:43+00:00\"\n            }\n        ],\n        \"reaction\": [\n            {\n                \"user_id\": \"5eb3e8bfc26a203c69957603\",\n                \"text\": \"this is test comment\",\n                \"profile_image\": \"profile_image_1588848830991_tst.jpg\",\n                \"username\": \"spotify\",\n                \"_id\": \"5ece28122f0855232eb29e09\",\n                \"createdAt\": \"2020-05-27T14:12:58+05:30\"\n            }\n        ],\n        \"isActive\": true,\n        \"_id\": \"5ecd16a8759fc49945cfc699\",\n        \"user_id\": \"5ec2660e9179cfbd1fb06765\",\n        \"createdAt\": \"2020-05-26T13:16:24.644Z\",\n        \"__v\": 0\n    },\n    \"message\": \"Reaction saved successfully.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routes/api/post.routes.js",
    "groupTitle": "Post",
    "name": "PostPostReaction"
  },
  {
    "type": "post",
    "url": "/post/store",
    "title": "Store",
    "group": "Post",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "post_content",
            "description": "<p>Post Content</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "isrc_code",
            "description": "<p>Post Isrc Code</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "social_type",
            "description": "<p>Social Type ['apple','spotify']</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "song_name",
            "description": "<p>Song Name</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "song_uri",
            "description": "<p>Song Uri</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "original_song_uri",
            "description": "<p>Original Song Uri</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "genre",
            "description": "<p>Original Genre</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "song_image",
            "description": "<p>Song Image</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "artist_name",
            "description": "<p>Artist Name</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "album_name",
            "description": "<p>Album Name</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique access-key.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"status\": 200,\n    \"data\": {\n        \"_id\": \"5eb523a9ed51692f40fcb817\",\n        \"shared_user_id\": \"5eb3e8bfc26a203c69957603\",\n        \"song_id\": \"5ea174f4c7d64cd82bddd54a\",\n        \"user_id\": \"5eb3e8bfc26a203c69957603\",\n        \"createdAt\": \"2020-05-08T09:17:29.522Z\",\n        \"__v\": 0\n    },\n    \"message\": \"Your post saved successfully.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routes/api/post.routes.js",
    "groupTitle": "Post",
    "name": "PostPostStore"
  },
  {
    "type": "get",
    "url": "/setting/all",
    "title": "All Setting",
    "version": "1.0.0",
    "group": "Setting",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"status\": 200,\n    \"data\": [\n        {\n            \"setting_name\": \"Site Email\",\n            \"setting_slug\": \"site-email\",\n            \"setting_value\": \"info@choona.com\",\n            \"status\": \"Active\",\n            \"isDeleted\": false,\n            \"_id\": \"5e81a7b8c7d64cd82b52eb63\"\n        },\n        {\n            \"setting_name\": \"Phone\",\n            \"setting_slug\": \"phone\",\n            \"setting_value\": \"1234567890\",\n            \"status\": \"Active\",\n            \"isDeleted\": false,\n            \"_id\": \"5e81a7e1c7d64cd82b52ec22\"\n        }\n    ],\n    \"message\": \"Setting Data fetched Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/api/setting.routes.js",
    "groupTitle": "Setting",
    "name": "GetSettingAll"
  },
  {
    "type": "get",
    "url": "/song/remove/:id",
    "title": "Unsave Song",
    "group": "Song",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>Song _id</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique access-key.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"status\": 200,\n    \"data\": {\n        \"n\": 1,\n        \"ok\": 1,\n        \"deletedCount\": 1\n    },\n    \"message\": \"Your song removed successfully.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routes/api/song.routes.js",
    "groupTitle": "Song",
    "name": "GetSongRemoveId"
  },
  {
    "type": "get",
    "url": "/song/spotify/:id",
    "title": "Spotyfy data",
    "version": "1.0.0",
    "group": "Song",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>Spotify Id</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>User's Access Token</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"status\": 200,\n    \"data\": {\n        \"date\": \"2018-06-15\",\n        \"title\": \"Immaterial\",\n        \"type\": \"track\",\n        \"track\": \"Immaterial\",\n        \"artist\": \"SOPHIE\",\n        \"image\": \"https://i.scdn.co/image/ab67616d0000b2736b03d8c63599cc94263d7d60\",\n        \"audio\": \"https://p.scdn.co/mp3-preview/6be8eb12ff18ae09b7a6d38ff1e5327fd128a74e?cid=a46f5c5745a14fbf826186da8da5ecc3\",\n        \"link\": \"https://open.spotify.com/track/6GoLARmR2OZl2EldehFrsA\",\n        \"embed\": \"https://embed.spotify.com/?uri=spotify:track:6GoLARmR2OZl2EldehFrsA\"\n    },\n    \"message\": \"Song fetched successfully.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/api/song.routes.js",
    "groupTitle": "Song",
    "name": "GetSongSpotifyId"
  },
  {
    "type": "post",
    "url": "/song/list",
    "title": "List",
    "group": "Song",
    "header": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique access-key.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"status\": 200,\n    \"data\": [\n        {\n            \"song_name\": \"CASTLE OF GLASS\",\n            \"song_image\": \"https://is3-ssl.mzstatic.com/image/thumb/Music/v4/5a/84/ef/5a84efde-05f5-f5ec-8361-a257840e2a1d/source/100x100bb.jpg\",\n            \"song_uri\": \"https://audio-ssl.itunes.apple.com/itunes-assets/Music/b1/ed/04/mzm.scpsmhis.aac.p.m4a\",\n            \"artist_name\": \"LINKIN PARK\",\n            \"album_name\": \"LIVING THINGS\",\n            \"album_image\": \"\",\n            \"isActive\": true,\n            \"_id\": \"5ecce4adbf7777276d11aa86\",\n            \"user_id\": \"5eb3e8bfc26a203c69957603\",\n            \"createdAt\": \"2020-05-26T09:43:09.222Z\",\n            \"__v\": 0\n        }\n    ],\n    \"message\": \"Your song fecthed successfully.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routes/api/song.routes.js",
    "groupTitle": "Song",
    "name": "PostSongList"
  },
  {
    "type": "post",
    "url": "/song/search",
    "title": "Search Song",
    "version": "1.0.0",
    "group": "Song",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>User's Access Token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "keyword",
            "description": "<p>Search keyword</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"status\": 200,\n    \"data\": [\n        {\n            \"song_name\": \"Dooriyan (feat. Kaprila)\",\n            \"song_image\": \"https://i.scdn.co/image/ab67616d0000b273d2b246039072d2e39914e352\",\n            \"song_uri\": \"https://p.scdn.co/mp3-preview/83e10bf66c3d60125621e4a2e98da58bd0a80a3a?cid=c771eeb07b694b2bbf774cb3aa93bc65\",\n            \"artist_name\": \"Dino James, Kaprila\",\n            \"album_name\": \"Dooriyan (feat. Kaprila)\",\n            \"album_image\": \"\",\n            \"isActive\": true,\n            \"_id\": \"5ecd1ac314a195af02f1b560\",\n            \"post_id\": \"5ecd19bc6f5ecca3834d1ed2\",\n            \"user_id\": \"5ec2660e9179cfbd1fb06765\",\n            \"createdAt\": \"2020-05-26T13:33:55.456Z\",\n            \"__v\": 0\n        }\n    ],\n    \"message\": \"Song fetched successfully.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/api/song.routes.js",
    "groupTitle": "Song",
    "name": "PostSongSearch"
  },
  {
    "type": "post",
    "url": "/song/sent/store",
    "title": "Share / Send Song",
    "group": "Song",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "song_id",
            "description": "<p>Song Id</p>"
          },
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "shared_user_id",
            "description": "<p>User id to send song</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique access-key.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"status\": 200,\n    \"data\": {\n        \"_id\": \"5eb523a9ed51692f40fcb817\",\n        \"shared_user_id\": \"5eb3e8bfc26a203c69957603\",\n        \"song_id\": \"5ea174f4c7d64cd82bddd54a\",\n        \"user_id\": \"5eb3e8bfc26a203c69957603\",\n        \"createdAt\": \"2020-05-08T09:17:29.522Z\",\n        \"__v\": 0\n    },\n    \"message\": \"Your song shared successfully.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routes/api/song.routes.js",
    "groupTitle": "Song",
    "name": "PostSongSentStore"
  },
  {
    "type": "post",
    "url": "/song/store",
    "title": "Store Song",
    "group": "Song",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "post_id",
            "description": "<p>Post _id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "song_uri",
            "description": "<p>Song URI</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "original_song_uri",
            "description": "<p>Original Song Uri</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "song_name",
            "description": "<p>Song Name</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "song_image",
            "description": "<p>Song Image</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "artist_name",
            "description": "<p>Artist Name</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "album_name",
            "description": "<p>Album Name</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique access-key.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"status\": 200,\n    \"data\": {\n        \"_id\": \"5eb52192ecb87c2c4eedf42e\",\n        \"song_id\": \"5ea174f4c7d64cd82bddd54a\",\n        \"user_id\": \"5eb3e8bfc26a203c69957603\",\n        \"createdAt\": \"2020-05-08T09:08:34.833Z\",\n        \"__v\": 0\n    },\n    \"message\": \"Your song saved successfully.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routes/api/song.routes.js",
    "groupTitle": "Song",
    "name": "PostSongStore"
  },
  {
    "type": "get",
    "url": "/follower/following/list",
    "title": "My Following List",
    "group": "User",
    "header": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique access-key.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"status\": 200,\n    \"data\": [\n        {\n            \"_id\": \"5eb41a21c7d64cd82b336b86\",\n            \"full_name\": \"DJ Ohem\",\n            \"profile_image\": \"profile_image_1588848830991_tst.jpg\",\n            \"username\": \"spotify\",\n            \"user_id\": \"5eb4199ac7d64cd82b33677b\"\n        }\n    ],\n    \"message\": \"Your following list fetched successfully.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routes/api/follower.routes.js",
    "groupTitle": "User",
    "name": "GetFollowerFollowingList"
  },
  {
    "type": "get",
    "url": "/follower/list",
    "title": "Follower List",
    "group": "User",
    "header": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique access-key.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"status\": 200,\n    \"data\": [\n        {\n            \"_id\": \"5eb41594271eb75b623492e4\",\n            \"full_name\": \"New User\",\n            \"profile_image\": null,\n            \"username\": null,\n            \"user_id\": \"5ea174f4c7d64cd82bddd54a\"\n        }\n    ],\n    \"message\": \"My follower list.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routes/api/follower.routes.js",
    "groupTitle": "User",
    "name": "GetFollowerList"
  },
  {
    "type": "get",
    "url": "/follower/top/list",
    "title": "Top 5 followed User List",
    "group": "User",
    "header": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique access-key.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"status\": 200,\n    \"data\": [\n        {\n            \"_id\": \"5ec3980b15506ba0d7a2bc31\",\n            \"full_name\": \"Sanjib Sarkar\",\n            \"username\": \"sanjib.sarkar\",\n            \"profile_image\": \"profile_image_1589880575218_xyz.jpg\",\n            \"isActive\": true,\n            \"isDeleted\": false,\n            \"topFollwersCount\": 3\n        },\n        {\n            \"_id\": \"5ecbbb38efa5f881e2c3f6a2\",\n            \"full_name\": \"Kausambi william jonas gomes  back\",\n            \"username\": \"isa\",\n            \"profile_image\": \"profile_image_1590412767996_xyz.jpg\",\n            \"isActive\": true,\n            \"isDeleted\": false,\n            \"topFollwersCount\": 2\n        },\n        {\n            \"_id\": \"5ecbfe9329fc19a7d086ebd5\",\n            \"full_name\": \"Andy Jones\",\n            \"username\": \"andy88jones\",\n            \"profile_image\": \"profile_image_1590689394439_IMG_3559.HEIC\",\n            \"isActive\": true,\n            \"isDeleted\": false,\n            \"topFollwersCount\": 2\n        },\n        {\n            \"_id\": \"5ec4f365b7449d6d26701f80\",\n            \"full_name\": \"Ranbir Kapoor\",\n            \"username\": \"KingKapoor\",\n            \"profile_image\": \"profile_image_1589965669127_IMG_0007.JPG\",\n            \"isActive\": true,\n            \"isDeleted\": false,\n            \"topFollwersCount\": 2\n        },\n        {\n            \"_id\": \"5edfef27689e3f3432392dfb\",\n            \"full_name\": \"Keith\",\n            \"username\": \"krjsub\",\n            \"profile_image\": \"profile_image_1591734054957_IMG_3972.JPG\",\n            \"isActive\": true,\n            \"isDeleted\": false,\n            \"topFollwersCount\": 1\n        }\n    ],\n    \"message\": \"Top Follower list fetched successfully.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routes/api/follower.routes.js",
    "groupTitle": "User",
    "name": "GetFollowerTopList"
  },
  {
    "type": "get",
    "url": "/user/logout",
    "title": "User Logout",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>User's Access Token</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"status\": 200,\n    \"data\": [],\n    \"isLoggedIn\": false,\n    \"message\": \"Logout successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routes/api/user.routes.js",
    "groupTitle": "User",
    "name": "GetUserLogout"
  },
  {
    "type": "get",
    "url": "/user/profile",
    "title": "User's Profile",
    "version": "1.0.0",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>User's Access token</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"status\": 200,\n    \"data\": {\n        \"full_name\": \"Node user\",\n        \"username\": \"spotify\",\n        \"social_username\": \"hello\",\n        \"phone\": \"\",\n        \"email\": \"laravel@gmail.com\",\n        \"password\": \"\",\n        \"profile_image\": \"profile_image_1588848830991_tst.jpg\",\n        \"social_id\": \"123456\",\n        \"register_type\": \"spotify\",\n        \"isDeleted\": false,\n        \"deviceToken\": \"\",\n        \"deviceType\": \"android\",\n        \"email_notification\": true,\n        \"push_notification\": true,\n        \"isActive\": true,\n        \"_id\": \"5eb3e8bfc26a203c69957603\",\n        \"role\": \"5ea174d3c7d64cd82bddd490\",\n        \"createdAt\": \"2020-05-07T10:53:51.583Z\",\n        \"updatedAt\": \"2020-05-07T10:53:51.583Z\"\n    },\n    \"message\": \"Profile Info fetched Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/api/user.routes.js",
    "groupTitle": "User",
    "name": "GetUserProfile"
  },
  {
    "type": "get",
    "url": "/user/profile/:id",
    "title": "See user Profile",
    "version": "1.0.0",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>User's Access Token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "_id",
            "description": "<p>User _id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"status\": 200,\n    \"data\": {\n        \"_id\": \"5eb4199ac7d64cd82b33677b\",\n        \"full_name\": \"DJ Ohem\",\n        \"username\": \"spotify\",\n        \"social_username\": \"user\",\n        \"phone\": \"\",\n        \"email\": \"test@gmail.com\",\n        \"password\": \"\",\n        \"profile_image\": \"profile_image_1588848830991_tst.jpg\",\n        \"social_id\": \"45678\",\n        \"register_type\": \"spotify\",\n        \"isDeleted\": false,\n        \"deviceToken\": \"\",\n        \"deviceType\": \"android\",\n        \"isActive\": true,\n        \"role\": \"5ea174d3c7d64cd82bddd490\",\n        \"createdAt\": \"2020-05-07T10:53:51.583Z\",\n        \"updatedAt\": \"2020-05-11T13:38:48.932Z\",\n        \"location\": \"kolkata\",\n        \"follower\": 1,\n        \"following\": 1\n    },\n    \"message\": \"Profile Info fetched Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/api/user.routes.js",
    "groupTitle": "User",
    "name": "GetUserProfileId"
  },
  {
    "type": "post",
    "url": "/follower/user/store",
    "title": "Follow Create Or Delete",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "follower_id",
            "description": "<p>Visited user Id</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Headers": [
          {
            "group": "Headers",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique access-key.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"status\": 201,\n    \"data\": {\n        \"_id\": \"5eb411ddb96f61589dad3c61\",\n        \"user_id\": \"5eb3e8bfc26a203c69957603\",\n        \"follower_id\": \"5ea174f4c7d64cd82bddd54a\",\n        \"createdAt\": \"2020-05-07T13:49:17.019Z\",\n        \"__v\": 0\n    },\n    \"message\": \"You have follwed this user successfully.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routes/api/follower.routes.js",
    "groupTitle": "User",
    "name": "PostFollowerUserStore"
  },
  {
    "type": "post",
    "url": "/user/available",
    "title": "Email Available Check",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>Email.</p>"
          }
        ]
      }
    },
    "group": "User",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"status\": 200,\n    \"data\": true,\n    \"message\": \"Email is already exists.\"\n}",
          "type": "json"
        },
        {
          "title": "Error",
          "content": "{\n    \"status\": 200,\n    \"data\": false,\n    \"message\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/api/user.routes.js",
    "groupTitle": "User",
    "name": "PostUserAvailable"
  },
  {
    "type": "post",
    "url": "/user/forgotpassword",
    "title": "Forgot Password",
    "version": "1.0.0",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "email",
            "description": "<p>User's account Email</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"status\": 200,\n    \"data\": [],\n    \"message\": \"A verification code to reset your password sent to your registered email\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/api/user.routes.js",
    "groupTitle": "User",
    "name": "PostUserForgotpassword"
  },
  {
    "type": "post",
    "url": "/user/profile/update",
    "title": "User profile update",
    "version": "1.0.0",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>User's Access Token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "file",
            "optional": false,
            "field": "profile_image",
            "description": "<p>Profile Image [Multipart]</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "full_name",
            "description": "<p>Full Name</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "location",
            "description": "<p>Location</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "feature_song[0]",
            "description": "<p>[song_name]</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"status\": 200,\n    \"data\": {\n        \"first_name\": \"Johana\",\n        \"last_name\": \"Black\",\n        \"phone\": \"7894561236\",\n        \"email\": \"johan@yopmail.com\",\n        \"password\": \"$2a$08$POxN7JXDFAT7bkxkhaoQDebUT4iMPV3kcPRqxr9.Vh2lQ9vEpqj..\",\n        \"profile_pic\": \"profile_pic_1586250554891_img3.jpg\",\n        \"deviceToken\": \"123456789\",\n        \"deviceType\": \"android\",\n        \"verification_code\": null,\n        \"social_id\": \"\",\n        \"register_type\": \"normal\",\n        \"isVerified\": false,\n        \"isDeleted\": false,\n        \"email_notification\": true,\n        \"push_notification\": true,\n        \"isActive\": true,\n        \"_id\": \"5e871514d982311378cf3c6c\",\n        \"role\": \"5e81bf47c7d64cd82b5348f1\",\n        \"createdAt\": \"2020-04-03T10:51:00.684Z\",\n        \"updatedAt\": \"2020-04-07T09:09:14.970Z\"\n    },\n    \"message\": \"User details updated successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/api/user.routes.js",
    "groupTitle": "User",
    "name": "PostUserProfileUpdate"
  },
  {
    "type": "post",
    "url": "/user/search",
    "title": "Search User",
    "version": "1.0.0",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>User's Access Token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "keyword",
            "description": "<p>Search keyword</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"status\": 200,\n    \"data\": [\n        {\n            \"full_name\": \"DJ Ohem\",\n            \"username\": \"spotify\",\n            \"profile_image\": \"profile_image_1588848830991_tst.jpg\",\n            \"_id\": \"5eb4199ac7d64cd82b33677b\",\n            \"isFollowing\": true\n        }\n    ],\n    \"message\": \"User list fetched successfully.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/api/user.routes.js",
    "groupTitle": "User",
    "name": "PostUserSearch"
  },
  {
    "type": "post",
    "url": "/user/search",
    "title": "Search With Phone",
    "version": "1.0.0",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>User's Access Token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "phone",
            "description": "<p>Phone in array [5555648583,5555648583]</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"status\": 200,\n    \"data\": [\n        {\n            \"full_name\": \"Prithviraj Acharya\",\n            \"username\": \"Prithviraj007\",\n            \"profile_image\": \"profile_image_1596030784346_IMG_0650.PNG\",\n            \"_id\": \"5f217f40411a74522398d1e6\",\n            \"isFollowing\": true\n        }\n    ],\n    \"message\": \"User list fetched successfully.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/api/user.routes.js",
    "groupTitle": "User",
    "name": "PostUserSearch"
  },
  {
    "type": "post",
    "url": "/user/signin",
    "title": "User SignIn",
    "version": "1.0.0",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "social_id",
            "description": "<p>Social Id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "social_type",
            "description": "<p>Social Type [apple/spotify]</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "deviceToken",
            "description": "<p>Device Token</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "deviceType",
            "description": "<p>Device Type[ios/android]</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"status\": 200,\n    \"data\": {\n        \"full_name\": \"Node user\",\n        \"username\": \"spotify\",\n        \"social_username\": \"hello\",\n        \"phone\": \"\",\n        \"email\": \"laravel@gmail.com\",\n        \"password\": \"\",\n        \"profile_image\": \"profile_image_1588848830991_tst.jpg\",\n        \"social_id\": \"123456\",\n        \"register_type\": \"spotify\",\n        \"isDeleted\": false,\n        \"deviceToken\": \"\",\n        \"deviceType\": \"android\",\n        \"email_notification\": true,\n        \"push_notification\": true,\n        \"isActive\": true,\n        \"_id\": \"5eb3e8bfc26a203c69957603\",\n        \"role\": \"5ea174d3c7d64cd82bddd490\",\n        \"createdAt\": \"2020-05-07T10:53:51.583Z\",\n        \"updatedAt\": \"2020-05-07T10:53:51.583Z\"\n    },\n    \"isLoggedIn\": true,\n    \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlYjNlOGJmYzI2YTIwM2M2OTk1NzYwMyIsImlhdCI6MTU4ODg1MDE5NCwiZXhwIjoxNTkxNDQyMTk0fQ.bSud3muISEB0xQ_JiIh3bX4A-_QyU_q4RhP_0WjrPYg\",\n    \"message\": \"Login successful.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/api/user.routes.js",
    "groupTitle": "User",
    "name": "PostUserSignin"
  },
  {
    "type": "post",
    "url": "/user/signup",
    "title": "User Signup",
    "version": "1.0.0",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "full_name",
            "description": "<p>Full Name</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "profile_image",
            "description": "<p>profile Image</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": "<p>Username</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "location",
            "description": "<p>Location</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "social_username",
            "description": "<p>Username[spotyfy/ apple]</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>Email</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "phone",
            "description": "<p>Phone</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "deviceToken",
            "description": "<p>Device Token</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "deviceType",
            "description": "<p>Device Type [android / ios]</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "social_id",
            "description": "<p>Social Id [ For  spotify or apple]</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "register_type",
            "description": "<p>[spotify / apple]</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"status\": 200,\n    \"data\": {\n        \"full_name\": \"Node user\",\n        \"username\": \"spotify\",\n        \"social_username\": \"hello\",\n        \"phone\": \"\",\n        \"email\": \"laravel@gmail.com\",\n        \"password\": \"\",\n        \"profile_image\": \"profile_image_1588848830991_tst.jpg\",\n        \"social_id\": \"123456\",\n        \"register_type\": \"spotify\",\n        \"isDeleted\": false,\n        \"deviceToken\": \"\",\n        \"deviceType\": \"android\",\n        \"email_notification\": true,\n        \"push_notification\": true,\n        \"isActive\": true,\n        \"_id\": \"5eb3e8bfc26a203c69957603\",\n        \"role\": \"5ea174d3c7d64cd82bddd490\",\n        \"createdAt\": \"2020-05-07T10:53:51.583Z\",\n        \"updatedAt\": \"2020-05-07T10:53:51.583Z\"\n    },\n    \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlYjNlOGJmYzI2YTIwM2M2OTk1NzYwMyIsImlhdCI6MTU4ODg0ODgzMSwiZXhwIjoxNTkxNDQwODMxfQ.ElS8AEKyZsOmFVVrunyw3B5AZvfiv8qVBqOY3LaniHo\",\n    \"message\": \"Registration successful.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/api/user.routes.js",
    "groupTitle": "User",
    "name": "PostUserSignup"
  }
] });
