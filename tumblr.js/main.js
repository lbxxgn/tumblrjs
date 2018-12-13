var tumblr = require('tumblr.js');
var client = tumblr.createClient({
  consumer_key: 'APB66HaXKOdzvFvEKen4O1EE3AyydLysL9g4QCnXVGJwyctnOz',
  consumer_secret: '1mTg6SKpptGyTXRGtmrnJSmbU8BU6aE43E4wotUufJ8Y9aurPx',
  token: 'M1lqNNIuiA9K70suq7s36ElsO8lF8dzqmgaeBdFC35g1h12Kcs',
  token_secret: 'OHZ7mH3pjKxep7h0wD8pNNCrrSvsHg2afilbVRrxKn83eEQkWG'
});




client.userFollowing({limit:10,offset:10},function(err,data){
    console.info(data);
});

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '45.32.82.180',
  user     : 'lbxxgn',
  password : 'lbxxxxwn',
  database : 'lbxxgn'
});
 
connection.connect();
 
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

client.userInfo(function(err, data) {
  data.user.blogs.forEach(function(blog) {
    console.log(blog.name);
  });
});

var addSql = 'INSERT INTO tumblr_folling(name,url,updated,postCount) VALUES(?,?,?,?)';

for (var i = 0; i <= 31; i++) {
	var limit = 10;
	var offset = i * 10 + 1;
	client.userFollowing({
		limit: 10,
		offset: offset
	}, function(err, data) {
		var postCount = 0;
		data.blogs.forEach(function(blog) {
			client.blogInfo(blog.name, function(err, data) {
				postCount = data.blog.total_posts;
				addSqlParams = [blog.name, blog.url, blog.updated, postCount]
				connection.query(addSql, addSqlParams, function(err, result) {
					if (err) {
						console.log('[INSERT ERROR] - ', err.message);
						return;
					}
					console.log('--------------------------INSERT----------------------------');
					console.log('INSERT ID:', result);
					console.log('-----------------------------------------------------------------\n\n');
				});

			})

		});
	});
}

client.userFollowing({limit:10,offset:10},function(err,data){
    data.blogs.forEach(function(blog) {
    console.log(blog.name);
  });
});