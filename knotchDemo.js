$(document).ready(function(){

var data, template, html;

data = {
  "userInfo": {
    "num_knotches": 2750,
    "num_topics": 1835,
    "num_followers": 13070,
    "num_following": 14066,
    "num_glory": 20723,
    "location": "San Francisco, California",
    "profilePicUrl": "https://graph.facebook.com/1572450228/picture?type=square&width=200&height=200",
    "name": "Stephanie Volftsun"
  },
  "knotches": [
    {
      "category": {
        "name": "Current Events",
        "code": 4
      },
      "__v": 3,
      "_id": "51cb400cd3a48fb64d000137",
      "comment": "Same sex marriage is now legal in 13 states. 30% of Americans live in a state where gay couples can marry legally. ðŸ˜Š",
      "sentiment": 20,
      "timestamp": "2013-06-26T19:25:00.612Z",
      "topic": "Gay marriage",
      "user": "1572450228",
      "userId": {
        "_id": "500e3b57bbcd08696800000a",
        "name": "Stephanie Volftsun",
        "profilePicUrl": "https://graph.facebook.com/1572450228/picture?type=square&width=200&height=200"
      },
      "flagged": 0,
      "flagSet": [],
      "topicTags": [],
      "userTags": [],
      "likes": [
        {
          "_id": "51cb4098d69be33620000176",
          "timestamp": "2013-06-26T19:27:20.043Z",
          "user": "562793502",
          "userId": {
            "_id": "513c226cd821deac0f002785",
            "name": "Aron Tzimas",
            "profilePicUrl": "https://graph.facebook.com/562793502/picture?type=square&width=200&height=200"
          }
        },
        {
          "_id": "51cb6e118c6c54b44d0001ec",
          "timestamp": "2013-06-26T22:41:21.859Z",
          "user": "1077270057",
          "userId": {
            "_id": "506f9878eab668160f1598ef",
            "name": "Tori Bryn Wycoff",
            "profilePicUrl": "https://graph.facebook.com/1077270057/picture?type=square&width=200&height=200"
          }
        }
      ],
      "replies": [
        {
          "userId": {
            "_id": "500e3a35bbcd086968000003",
            "name": "Bernie Volftsun",
            "profilePicUrl": "https://graph.facebook.com/100001233207001/picture?type=square&width=200&height=200"
          },
          "reply": "asdfasdf",
          "timestamp": "2013-07-11T01:20:04.661Z",
          "_id": "51de08443f6d8ed20900001e",
          "topicTags": [],
          "userTags": []
        },
        {
          "userId": {
            "_id": "500e3a35bbcd086968000003",
            "name": "Bernie Volftsun",
            "profilePicUrl": "https://graph.facebook.com/100001233207001/picture?type=square&width=200&height=200"
          },
          "reply": "asdfasdf",
          "timestamp": "2013-07-11T01:20:08.709Z",
          "_id": "51de08483f6d8ed20900001f",
          "topicTags": [],
          "userTags": []
        },
        {
          "userId": {
            "_id": "500e3a35bbcd086968000003",
            "name": "Bernie Volftsun",
            "profilePicUrl": "https://graph.facebook.com/100001233207001/picture?type=square&width=200&height=200"
          },
          "reply": "asdfasdf",
          "timestamp": "2013-07-11T01:20:09.128Z",
          "_id": "51de08493f6d8ed209000020",
          "topicTags": [],
          "userTags": []
        }
      ]
    },
    {
      "category": {
        "name": "Science & Tech",
        "code": 1
      },
      "__v": 0,
      "_id": "51cb3fd1d69be33620000175",
      "comment": "But exciting!!",
      "sentiment": 14,
      "timestamp": "2013-06-26T19:24:01.486Z",
      "topic": "Deployments",
      "user": "1572450228",
      "userId": {
        "_id": "500e3b57bbcd08696800000a",
        "name": "Stephanie Volftsun",
        "profilePicUrl": "https://graph.facebook.com/1572450228/picture?type=square&width=200&height=200"
      },
      "flagged": 0,
      "flagSet": [],
      "topicTags": [],
      "userTags": [],
      "likes": [],
      "replies": []
    },
    {
      "category": {
        "name": "Science & Tech",
        "code": 1
      },
      "__v": 2,
      "_id": "51cb3fc13725e2be75000160",
      "comment": "Scary. ",
      "sentiment": 8,
      "timestamp": "2013-06-26T19:23:45.510Z",
      "topic": "Deployments",
      "user": "1572450228",
      "userId": {
        "_id": "500e3b57bbcd08696800000a",
        "name": "Stephanie Volftsun",
        "profilePicUrl": "https://graph.facebook.com/1572450228/picture?type=square&width=200&height=200"
      },
      "flagged": 0,
      "flagSet": [],
      "topicTags": [],
      "userTags": [],
      "likes": [],
      "replies": [
        {
          "userId": {
            "_id": "500e3a35bbcd086968000003",
            "name": "Bernie Volftsun",
            "profilePicUrl": "https://graph.facebook.com/100001233207001/picture?type=square&width=200&height=200"
          },
          "reply": "no way",
          "timestamp": "2013-07-12T07:51:57.050Z",
          "_id": "51dfb59d3f6d8ed209000021",
          "topicTags": [],
          "userTags": []
        },
        {
          "userId": {
            "_id": "500e3a35bbcd086968000003",
            "name": "Bernie Volftsun",
            "profilePicUrl": "https://graph.facebook.com/100001233207001/picture?type=square&width=200&height=200"
          },
          "reply": "resp",
          "timestamp": "2013-07-12T07:53:01.991Z",
          "_id": "51dfb5dd3f6d8ed209000022",
          "topicTags": [],
          "userTags": []
        }
      ]
    },
    {
      "category": {
        "name": "Current Events",
        "code": 4
      },
      "__v": 0,
      "_id": "51cb3f96d69be33620000174",
      "comment": "WOWZA the Supreme Court struck down DOMA and killed prop 8!!  HUGE DAY for the advancement of gay rights! And now we get to celebrate all weekend at Pride!!",
      "sentiment": 20,
      "timestamp": "2013-06-26T19:23:02.406Z",
      "topic": "Gay marriage",
      "user": "1572450228",
      "userId": {
        "_id": "500e3b57bbcd08696800000a",
        "name": "Stephanie Volftsun",
        "profilePicUrl": "https://graph.facebook.com/1572450228/picture?type=square&width=200&height=200"
      },
      "flagged": 0,
      "flagSet": [],
      "topicTags": [],
      "userTags": [],
      "likes": [
        {
          "_id": "51cb44c9a9bb60bb200001d8",
          "timestamp": "2013-06-26T19:45:13.520Z",
          "user": "3104231",
          "userId": {
            "_id": "5010a4e5e22117476d0000f1",
            "name": "Lana Volftsun",
            "profilePicUrl": "https://graph.facebook.com/3104231/picture?type=square&width=200&height=200"
          }
        }
      ],
      "replies": []
    },
    {
      "category": {
        "name": "Food & Drink",
        "code": 8
      },
      "__v": 0,
      "_id": "51cb39f07a10c8bc750001a4",
      "comment": "Snapple once told me that flamingos are pink because they eat shrimp. Truth or lie?",
      "sentiment": 12,
      "timestamp": "2013-06-26T18:58:56.892Z",
      "topic": "Snapple Facts",
      "user": "1572450228",
      "userId": {
        "_id": "500e3b57bbcd08696800000a",
        "name": "Stephanie Volftsun",
        "profilePicUrl": "https://graph.facebook.com/1572450228/picture?type=square&width=200&height=200"
      },
      "flagged": 0,
      "flagSet": [],
      "topicTags": [],
      "userTags": [],
      "likes": [
        {
          "_id": "51cb3cab7a10c8bc750001ab",
          "timestamp": "2013-06-26T19:10:35.055Z",
          "user": "1389344639",
          "userId": {
            "_id": "51a62512cd7f10e30c003204",
            "name": "Cris Peterson",
            "profilePicUrl": "https://graph.facebook.com/1389344639/picture?type=square&width=200&height=200"
          }
        },
        {
          "_id": "51cb5ca58c6c54b44d0001d3",
          "timestamp": "2013-06-26T21:27:01.199Z",
          "user": "100001583094214",
          "userId": {
            "_id": "5176299ab4f0959f17000922",
            "name": "Katherine Ihadaname",
            "profilePicUrl": "https://graph.facebook.com/100001583094214/picture?type=square&width=200&height=200"
          }
        },
        {
          "_id": "51cb663cd69be336200001a7",
          "timestamp": "2013-06-26T22:07:56.702Z",
          "user": "76700034",
          "userId": {
            "_id": "517094af53b5fbdb0a00000f",
            "name": "Kristen S. Porter",
            "profilePicUrl": "https://graph.facebook.com/76700034/picture?type=square&width=200&height=200"
          }
        }
      ],
      "replies": [
        {
          "_id": "51cb3cbed69be33620000169",
          "reply": "Well if Snapple says it...",
          "timestamp": "2013-07-26T19:10:54.377Z",
          "user": "1389344639",
          "userId": {
            "_id": "51a62512cd7f10e30c003204",
            "name": "Cris Peterson",
            "profilePicUrl": "https://graph.facebook.com/1389344639/picture?type=square&width=200&height=200"
          },
          "topicTags": [],
          "userTags": []
        },
        {
          "_id": "51cb5cb01f07ac34200001bd",
          "reply": "It's actually true :)",
          "timestamp": "2013-07-26T21:27:10.892Z",
          "user": "100001583094214",
          "userId": {
            "_id": "5176299ab4f0959f17000922",
            "name": "Katherine Ihadaname",
            "profilePicUrl": "https://graph.facebook.com/100001583094214/picture?type=square&width=200&height=200"
          },
          "topicTags": [],
          "userTags": []
        }
      ]
    },
    {
      "category": {
        "name": "Food & Drink",
        "code": 8
      },
      "__v": 0,
      "_id": "51cb38e11f07ac34200001a1",
      "comment": "Starbucks",
      "sentiment": 10,
      "timestamp": "2013-06-26T18:54:25.106Z",
      "topic": "What are you currently craving",
      "user": "1572450228",
      "userId": {
        "_id": "500e3b57bbcd08696800000a",
        "name": "Stephanie Volftsun",
        "profilePicUrl": "https://graph.facebook.com/1572450228/picture?type=square&width=200&height=200"
      },
      "flagged": 0,
      "flagSet": [],
      "topicTags": [],
      "userTags": [],
      "likes": [],
      "replies": []
    },
    {
      "category": {
        "name": "Music",
        "code": 2
      },
      "__v": 0,
      "_id": "51cb388ca9bb60bb200001cc",
      "comment": "I miss you.",
      "sentiment": 20,
      "timestamp": "2013-06-26T18:53:00.575Z",
      "topic": "Michael Jackson",
      "user": "1572450228",
      "userId": {
        "_id": "500e3b57bbcd08696800000a",
        "name": "Stephanie Volftsun",
        "profilePicUrl": "https://graph.facebook.com/1572450228/picture?type=square&width=200&height=200"
      },
      "flagged": 0,
      "flagSet": [],
      "topicTags": [],
      "userTags": [],
      "likes": [],
      "replies": []
    },
    {
      "category": {
        "name": "Current Events",
        "code": 4
      },
      "__v": 0,
      "_id": "51cb36d4d69be33620000163",
      "comment": "Can't wait to walk in the SF pride parade with @ToriBrynWycoff this weekend!!! ðŸŽ‰ðŸŽˆ",
      "sentiment": 20,
      "timestamp": "2013-06-26T18:45:40.511Z",
      "topic": "Gay Pride Parades",
      "user": "1572450228",
      "userId": {
        "_id": "500e3b57bbcd08696800000a",
        "name": "Stephanie Volftsun",
        "profilePicUrl": "https://graph.facebook.com/1572450228/picture?type=square&width=200&height=200"
      },
      "flagged": 0,
      "flagSet": [],
      "topicTags": [],
      "userTags": [
        {
          "_id": "51cb36d4d69be33620000164",
          "fbid": "1077270057",
          "name": "@ToriBrynWycoff",
          "userId": "506f9878eab668160f1598ef"
        }
      ],
      "likes": [
        {
          "_id": "51cb44e71f07ac34200001a9",
          "timestamp": "2013-06-26T19:45:43.986Z",
          "user": "3104231",
          "userId": {
            "_id": "5010a4e5e22117476d0000f1",
            "name": "Lana Volftsun",
            "profilePicUrl": "https://graph.facebook.com/3104231/picture?type=square&width=200&height=200"
          }
        },
        {
          "_id": "51cb66e58c6c54b44d0001e7",
          "timestamp": "2013-06-26T22:10:45.832Z",
          "user": "76700034",
          "userId": {
            "_id": "517094af53b5fbdb0a00000f",
            "name": "Kristen S. Porter",
            "profilePicUrl": "https://graph.facebook.com/76700034/picture?type=square&width=200&height=200"
          }
        }
      ],
      "replies": [
        {
          "_id": "51cb44f1246f79b9200001a1",
          "reply": "Jealousy",
          "timestamp": "2013-07-26T19:45:51.895Z",
          "user": "3104231",
          "userId": {
            "_id": "5010a4e5e22117476d0000f1",
            "name": "Lana Volftsun",
            "profilePicUrl": "https://graph.facebook.com/3104231/picture?type=square&width=200&height=200"
          },
          "topicTags": [],
          "userTags": []
        },
        {
          "_id": "51cb6e068c6c54b44d0001ea",
          "reply": "W/ the Googs trolley!",
          "timestamp": "2013-07-26T22:41:10.870Z",
          "user": "1077270057",
          "userId": {
            "_id": "506f9878eab668160f1598ef",
            "name": "Tori Bryn Wycoff",
            "profilePicUrl": "https://graph.facebook.com/1077270057/picture?type=square&width=200&height=200"
          },
          "topicTags": [],
          "userTags": []
        }
      ]
    },
    {
      "category": {
        "name": "Science & Tech",
        "code": 1
      },
      "__v": 0,
      "_id": "51cb364fd69be3362000015e",
      "comment": "Okay the chat head bubbles are growing on me...",
      "sentiment": 12,
      "timestamp": "2013-06-26T18:43:27.584Z",
      "topic": "Facebook iOS App",
      "user": "1572450228",
      "userId": {
        "_id": "500e3b57bbcd08696800000a",
        "name": "Stephanie Volftsun",
        "profilePicUrl": "https://graph.facebook.com/1572450228/picture?type=square&width=200&height=200"
      },
      "flagged": 0,
      "flagSet": [],
      "topicTags": [],
      "userTags": [],
      "likes": [],
      "replies": []
    },
    {
      "category": {
        "name": "Health & Fitness",
        "code": 9
      },
      "__v": 0,
      "_id": "51cb32d41f07ac342000019a",
      "comment": "I always eat 10x the proper dosage. Vitamin overload.",
      "sentiment": 12,
      "timestamp": "2013-06-26T18:28:36.953Z",
      "topic": "Gummy Vitamins",
      "user": "1572450228",
      "userId": {
        "_id": "500e3b57bbcd08696800000a",
        "name": "Stephanie Volftsun",
        "profilePicUrl": "https://graph.facebook.com/1572450228/picture?type=square&width=200&height=200"
      },
      "flagged": 0,
      "flagSet": [],
      "topicTags": [],
      "userTags": [],
      "likes": [
        {
          "_id": "51cb33991f07ac342000019b",
          "timestamp": "2013-06-26T18:31:53.582Z",
          "user": "100000016311985",
          "userId": {
            "_id": "51b4d443ac010ed90f0009a8",
            "name": "Amy Lynn Perrella",
            "profilePicUrl": "https://graph.facebook.com/100000016311985/picture?type=square&width=200&height=200"
          }
        },
        {
          "_id": "51cb3ba0246f79b92000019a",
          "timestamp": "2013-06-26T19:06:08.525Z",
          "user": "1125030013",
          "userId": {
            "_id": "51714eefb8b17d800e000201",
            "name": "Caroline Edwards",
            "profilePicUrl": "https://graph.facebook.com/1125030013/picture?type=square&width=200&height=200"
          }
        }
      ],
      "replies": []
    }
  ]
};

  template = "{{#userInfo}}<div class='bar'><img class='logo' src='assets/knotch-logo.png'/><div class='bar-name'>{{name}}</div></div><img src='{{profilePicUrl}}' class='profile-pic'/><div class='location'>{{location}}</div><div class='stats'><div class='stats-num'>{{num_topics}}</div><div class='stats-title'> Topics</div><img class='divider' src='assets/divider.png'/><div class='stats-num'>{{num_followers}}</div><div class='stats-title'> Followers</div><img class='divider' src='assets/divider.png'/><div class='stats-num'>{{num_following}}</div><div class='stats-title'> Following</div><img class='divider' src='assets/divider.png'/><div class='stats-num'>{{num_glory}}</div><div class='stats-title'> Glory</div></div>{{/userInfo}}<div class='sentiment-big-bar'><img class='sentiment-little-bar' src='assets/knotch-sentnements-bar.png'/></div>{{#knotches}}<div class='knotches'><div class='topic'>{{topic}}<img class='right-arrow' src='assets/topic-arrow.png'></div><div class='comment sentiment-{{sentiment}}'>{{comment}}<img src='knotch_boxes/triangle{{sentiment}}.png' class='triangle'/></div>{{#userId}}<div class='comment-author'><img class='comment-author-image' src='{{profilePicUrl}}'/><div class='comment-author-name'>{{name}}</div></div>{{/userId}}{{#replies}}{{#userId}}<div class='reply'><div class='reply-author-name'><img class='reply-author-image' src='{{profilePicUrl}}'/>{{name}}</div><div class='reply-content'>'{{reply}}'</div></div>{{/userId}}{{/replies}}<input class='comment-input' type='text' placeholder='Comment on this knotch...'></div>{{/knotches}}"
  html = Mustache.render(template, data);
  $('body').append(html);


});