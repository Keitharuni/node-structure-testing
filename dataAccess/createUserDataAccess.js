const db = rquire('mysql');

/**
 * 
 * @param {*} userName 
 * @param {*} password 
 */
exports.createUserDataAccess = (userName, password) => {
  const connection = db.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'test'
  })

  connection.connect();

  connection.query(`INSERT INTO user (userName, password) VALUES (${userName}, ${password})`, (err, results) => {
    if (err) {
      console.log(err);
      results.status(500).send('Error')
    } else {
      results.status(200).send('WOW')
    }
  });

  connection.end();
}