const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const User = mongoose.model("User");
const secretOrKey = require("./keys").secretOrKey;

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey
}

module.exports = passport => {
  passport.use(new JwtStrategy(options, async (token, done) => {
    if (token) {
      const user = await User.findById(token._id);
      return done(null, user);
    }
    return done(null, false)
  }))
}