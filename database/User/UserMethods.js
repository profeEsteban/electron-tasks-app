const { UserModel } = require("./UserModel");

const UserNew = (username, password) => new Promise((resolve, reject) => {
  var userNew = new UserModel({
    username,
    password,
  });

  userNew.save(function (err) {
    if (err) reject(err);

    UserModel.findOne({ username: username }, function (err, user) {
      if (err) reject(err);

      user.comparePassword(password, function (err, isMatch) {
        if (err) reject(err);
        resolve(`${password}: ${isMatch}`);
      });
    });
  })
})


const UserLogin = (username, password) => new Promise((resolve, reject) => {
  UserModel.findOne({ username: username }, function (err, user) {
    if (err) reject(err);
    console.log("USER: ", user)
    if (user)
      user.comparePassword(password, function (err, isMatch) {
        if (err) reject(err);

        if (isMatch)
          resolve(user._id);
        else
          reject("Password Incorrect")
      });
    else
      reject("Username Incorrect")
  });
})


module.exports = {
  UserNew,
  UserLogin
}
