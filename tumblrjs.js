var tumblr = require('tumblr.js');
var client = tumblr.createClient({
  consumer_key: 'APB66HaXKOdzvFvEKen4O1EE3AyydLysL9g4QCnXVGJwyctnOz',
  consumer_secret: '1mTg6SKpptGyTXRGtmrnJSmbU8BU6aE43E4wotUufJ8Y9aurPx',
  token: '<oauth token>',
  token_secret: '<oauth token secret>'
});

client.userInfo(function(err, data) {
  data.user.blogs.forEach(function(blog) {
    console.log(blog.name);
  });
});