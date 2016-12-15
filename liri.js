var chirp = require("./keys.js");

var Twitter = require("twitter");
 
var client = new Twitter({
  consumer_key: chirp.twitterKeys.consumer_key,
  consumer_secret: chirp.twitterKeys.consumer_secret,
  access_token_key: chirp.twitterKeys.access_token_key,
  access_token_secret: chirp.twitterKeys.access_token_secret
});


var commands = process.argv[2];

if(commands == "my-tweets") 
	var params = {screen_name: 'zuttosotto'};
	client.get('statuses/user_timeline', params, function(error, tweets, response) {
	  if (!error) {
	  	for(var i = 0; i < tweets.length; i++){
	  		console.log(tweets[i].text);
	  	} else {
	  		console.log("oops!");
	  	}
	  }
	});
