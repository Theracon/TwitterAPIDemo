// Dependencies
const Twit = require('twit')
require('dotenv').config()

// Create an instance of Twit
const T = new Twit({
    consumer_key:         process.env.CONSUMER_KEY,
    consumer_secret:      process.env.CONSUMER_SECRET,
    access_token:         process.env.ACCESS_TOKEN,
    access_token_secret:  process.env.ACCESS_TOKEN_SECRET,
});

const getTweets = T;

getTweets.get('statuses/user_timeline', { screen_name: 'cnn', count: 10 }, function(err, data) {});

module.exports = getTweets;