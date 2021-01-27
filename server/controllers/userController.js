const db = require('../models');
const bcrypt = require('bcrypt')

// Defining methods for the userController
module.exports = {

  getUser: (req, res, next) => {
    console.log ("getUser:", req.body)
    if (req.body.userName) {
      return res.json({ user: req.body.userName });
    } else {
      return res.json({ user: null });
    }
  },

  getUsers: (req, res) => {
    console.log ("Inside getUsers: ",req.data);
    if (req.user) {
      db.User.find({})
      .then((users) => {
          return res.json(users);
      })
      .catch(err => {
          res.json(err);
      });
    } else {
      return res.json({ user: null });
    }
  },

  getUserInfo: (req, res) => {
    if (req.user) {
      db.User.find({
        userName: req.params.userName
      })
      .then((user) => {
          return res.json(user);
      })
      .catch(err => {
          res.json(err);
      });
    } else {
      return res.json({ user: null });
    }
  },
  updateUser: (req, res) => {
    const { userName, firstName, lastName, userEmail, password, profileImg, userInterest, friends} = req.body;
    if (req.user) {

      if (userName === req.user.userName) {
        //username was not changed:
        //check to see if the user's password was changed:
        if (password !== undefined) {
          //Password Change:
          const newPassword = bcrypt.hashSync(password, 10);
          db.User.updateOne(
            //update user data:
            {
              userName: req.user.userName
            },
            {
              $set: {
                userName, firstName, lastName, userEmail, 
                password: newPassword, 
                profileImg, userInterest, friends
              }
            },
            (error, data) => {
              if (error) {
                res.send(error);
              } else {
                res.send(data);
              }
            }
          );
        } else {
          //Password Unchanged:
          db.User.updateOne(
            {
              userName: req.user.userName
            },
            {
              $set: {
                userName, firstName, lastName, userEmail, profileImg, userInterest, friends
              }
            },
            (error, data) => {
              if (error) {
                res.send(error);
              } else {
                res.send(data);
              }
            }
          );
        }
      } else {

        db.User.findOne({ userName: userName }, (err, userMatch) => {

          //If a match was found, someone else has the same username, return an error:
          if (userMatch) {
            //console.log('Error: that username already exists.')
            return res.json({
              error: 'That username already exists. Please choose another.'
            });
          } else {

            //If a match was not found, change the user's username:
            //check to see if the user's password was changed:
            if (password !== undefined) {
              //Password Change:
              const newPassword = bcrypt.hashSync(password, 10);
              db.User.updateOne(
                //update user data:
                {
                  userName: req.user.userName
                },
                {
                  $set: {
                    userName, firstName, lastName, userEmail, 
                    password: newPassword, 
                    profileImg, userInterest, friends
                  }
                },
                (error, data) => {
                  if (error) {
                    res.send(error);
                  } else {
                    res.send(data);
                  }
                }
              );
              
            } else {
              //Password Unchanged:
              db.User.updateOne(
                {
                  userName: req.user.userName
                },
                {
                  $set: {
                    userName, firstName, lastName, userEmail, profileImg, userInterest, friends
                  }
                },
                (error, data) => {
                  if (error) {
                    res.send(error);
                  } else {
                    res.send(data);
                  }
                }
              );
              
            }
          }
        });

      }

    } else {
      return res.json({ user: null });
    }
  },

  // Register User - EXS 27th January 2021
  register: (req, res) => {
    const { firstName, lastName, userName, password, userEmail, friends, userInterest, profileImg } = req.body;
    // ADD VALIDATION
    db.User.findOne({ userName: userName }, (err, userMatch) => {
      if (userMatch) {
        return res.json({
          error: `Sorry, already a user with the username: ${userName}`
        });
      }
      const newUser = new db.User({
        firstName: firstName,
        lastName: lastName,
        userName: userName,
        password: password,
        userEmail: userEmail
      });
      newUser.save((err, savedUser) => {
        if (err) return res.json(err);
        return res.json(savedUser);
      });
    });
  },


  logout: (req, res) => {
    if (req.user) {
      req.session.destroy();
      res.clearCookie('connect.sid'); // clean up!
      return res.json({ msg: 'logging you out' });
    } else {
      return res.json({ msg: 'no user to log out!' });
    }
  },
  auth: function (req, res, next) {
    // console.log(req.body);
    next();
  },
  authenticate: (req, res) => {
    //console.log('req:', req);
    //console.log('hit');
    const user = JSON.parse(JSON.stringify(req.user)); // hack
    const cleanUser = Object.assign({}, user);
    if (cleanUser) {
      // console.log(`Deleting ${cleanUser.password}`);
      delete cleanUser.password;
    }
    res.json({ user: cleanUser });
  }
};