var mysql      = require('mysql');
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Gundam123",
  database: "friends_db"
});

connection.connect(function(err) {
  if (err) throw err;
  friendsList();
});

var tableArray = [];

function friendsList () {
  console.log("");  
  connection.query("SELECT * FROM friend", function(err, res) {
    for (var i = 0; i < res.length; i++) {
      
      tableArray.push({
        name: res[i].full_name,
        photo: res[i].photo_url,
        scores: [res[i].score1,res[i].score2,res[i].score3,res[i].score4,res[i].score5,res[i].score6,res[i].score7,res[i].score8,res[i].score9,res[i].score10],
      });
    }

  });
}

module.exports = tableArray;