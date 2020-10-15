const db = require('../util/database');

module.exports = class User {
  constructor(email, password, cpassword) {
    this.email = email;
    this.password = password;
    this.cpassword = cpassword;
  }

  static find(email) {
    return db.execute('SELECT * FROM plant-app WHERE email = ?', [email]);
  }

  static save(user) {
    return db.execute(
      'INSERT INTO plant-app (email, password, cpassword) VALUES (?, ?, ?)',
      [user.email, user.password, user.cpassword]
    );
  }
};
