// Dependencies
const express = require('express');
const app = express();
const Twit = require('twit')
require('dotenv').config()

// Create an instance of Twit
const T = new Twit({
    consumer_key:         process.env.CONSUMER_KEY,
    consumer_secret:      process.env.CONSUMER_SECRET,
    access_token:         process.env.ACCESS_TOKEN,
    access_token_secret:  process.env.ACCESS_TOKEN_SECRET,
});

// Set view engine to ejs
app.set('view engine', 'ejs');

// Root route
app.get('/', function(req, res) {
    res.render('index');
});

// Fetch route
app.get('/fetch', function(req, res) {
    if(req.query.query.length > 0) {
        const query = req.query.query;
    
        const options = {
            screen_name: query,
            count: 10
        }
    
        T.get('statuses/user_timeline', options, function(err, data) {
            if(data) {
                res.render('search-results', { data: data, query: query })
            } else {
                res.redirect('back');
            }
        })
    } else {
        res.redirect('back');
    }
});

// Listen route
app.listen(8080, function() {
    console.log(`Twitter API Demo now running on port ${process.env.PORT}`);
});
