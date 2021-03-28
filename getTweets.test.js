const getTweets = require('./getTweets');
const expect = require('expect');

describe('getTweets', () => {
    it('should return type of data', () => {

        expect(typeof getTweets.get('statuses/user_timeline', { screen_name: 'cnn', count: 10 }, function(err, data) {})).toBe('object');
    });
});
