var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "course_admin",
  password: "aKLcXKw8ySTR"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
