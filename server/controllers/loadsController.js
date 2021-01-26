const ObjectId = require("mongoose").Types.ObjectId;
const db = require("../models");

// Defining methods for the reviewsController
module.exports = {
  findAll: (req, res) => {
    if (req.user) {
      db.Loads.find({}).sort({ _id: -1 })
        .then((loads) => {
          res.json(loads);
        })
        .catch((err) => res.status(422).json(err));
    }
  },
  findById: (req, res) => {
    //console.log("req.params.id: ", req.params.id);
    if (req.user) {
      db.Loads.find({
        _id: req.params.id,
      })
        .then((loads) => {
          res.json(loads);
        })
        .catch((err) => res.status(422).json(err));
    }
  },
  create: (req, res) => {
    //console.log("review submitted: ", req.body);
    const {
      reviewOwner,
      reviewCreated,
      reviewTitle,
      reviewBody,
      reviewRating,
      reviewLocation,
      reviewLat,
      reviewLong,
      reviewGeoLocation,
      reviewComments
    } = req.body;
    if (req.user) {
      db.Reviews.create({
        reviewOwner,
        reviewCreated,
        reviewTitle,
        reviewBody,
        reviewRating,
        reviewLocation,
        reviewLat,
        reviewLong,
        reviewGeoLocation,
        reviewComments
      })
        .then((dbReview) => {
          res.json(dbReview);
        })
        .catch((err) => res.status(422).json(err));
    }
  },
  
 
  updateComments: (req, res) => {
    const user = req.user.userName;
    console.log('Comments user before change: ', user);
    const userName = req.params.userName;
    console.log('Comments update Username to: ', userName);

    if (userName === req.user.userName) {
      //username unchanged:
      db.Reviews.updateMany(
        {
          "reviewComments.user": user
        },  
        {
          $set: {
            "reviewComments.$.user": userName
          }
        },
        (error, data) => {
          if (error) {
            res.send(error);
          } else {
            res.send(data);
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
      //username was changed:
      db.User.findOne({ userName: userName }, (err, userMatch) => {

        //If a match was found, someone else has the same username, return an error:
        if (userMatch) {
          console.log('Error: that username already exists.')
          return res.json({
            error: 'That username already exists. Please choose another.'
          });
        } else {
  
          db.Reviews.updateMany(
            {
              "reviewComments.user": user
            },  
            {
              $set: {
                "reviewComments.$.user": userName
              }
            },
            (error, data) => {
              if (error) {
                res.send(error);
              } else {
                res.send(data);
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
      });
    }

  }
}