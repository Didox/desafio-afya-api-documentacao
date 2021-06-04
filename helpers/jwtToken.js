const jwt = require('jsonwebtoken');

const environment = require('../config/environment/dev');

module.exports = class JwtToken {
  static makeToken(user) {
    return jwt.sign({ id: user.id }, environment.jwt.user.secret,
      { expiresIn: environment.jwt.user.expire });
  }
};
