const ObjectId = require("mongoose").Types.ObjectId;
const db = require("../models");

// Defining methods for the reviewsController
// module.exports = {

  export const findAll = async (req, res) => {
    console.log ("Inside our Find Loads Controller: ", req.data);
    try {
      const allLoads = await db.loads.find();
      res.status(200).json(allLoads);
    } catch(error) {
      res.status(400).json({message: error.message});
    }
  }

  export const createLoad = async (req, res) => {
    console.log ("Creating Load: ", req.body)
    const addLoadBody = req.body;
    const newLoad = await new db.loads(addLoadBody);
    try {
      newLoad.save();
      res.status(200).json({message: newLoad })

    } catch(error) {
      res.status(400).json({message: error.message});
    }
  }


  // findAll: (req, res) => {
  //   console.log ("Inside findAll loads")
  //   if (req.user) {
  //     db.Loads.find({}).sort({ _id: -1 })
  //       .then((loads) => {
  //         res.json(loads);
  //       })
  //       .catch((err) => res.status(422).json(err));
  //   }
  // // },
  // findById: (req, res) => {
  //   //console.log("req.params.id: ", req.params.id);
  //   if (req.user) {
  //     db.Loads.find({
  //       _id: req.params.id,
  //     })
  //       .then((loads) => {
  //         res.json(loads);
  //       })
  //       .catch((err) => res.status(422).json(err));
  //   }
  // },
  // create: (req, res) => {
  //   //console.log("review submitted: ", req.body);
  //   const {
  //     shipperName,
  //     shipperAddress1,
  //     shipperAddress2,
  //     shipperCity,
  //     shipperState,
  //     shipperZip,
  //     consigneeDetails,
  //     thirdPartyDetails,
  //     shipmentDetails
  //   } = req.body;
  //   if (req.user) {
  //     db.Loads.create({
  //       shipperName,
  //       shipperAddress1,
  //       shipperAddress2,
  //       shipperCity,
  //       shipperState,
  //       shipperZip,
  //       consigneeDetails,
  //       thirdPartyDetails,
  //       shipmentDetails
  //     })
  //       .then((dbLoads) => {
  //         res.json(dbLoads);
  //       })
  //       .catch((err) => res.status(422).json(err));
  //   }
  // },
  
 
  // updateComments: (req, res) => {
  //   const user = req.user.userName;
  //   console.log('Comments user before change: ', user);
  //   const userName = req.params.userName;
  //   console.log('Comments update Username to: ', userName);

  //   if (userName === req.user.userName) {
  //     //username unchanged:
  //     db.Reviews.updateMany(
  //       {
  //         "reviewComments.user": user
  //       },  
  //       {
  //         $set: {
  //           "reviewComments.$.user": userName
  //         }
  //       },
  //       (error, data) => {
  //         if (error) {
  //           res.send(error);
  //         } else {
  //           res.send(data);
  //         }
  //       },
  //       (error, data) => {
  //         if (error) {
  //           res.send(error);
  //         } else {
  //           res.send(data);
  //         }
  //       }
  //     );
  //   } else {
  //     //username was changed:
  //     db.User.findOne({ userName: userName }, (err, userMatch) => {

  //       //If a match was found, someone else has the same username, return an error:
  //       if (userMatch) {
  //         console.log('Error: that username already exists.')
  //         return res.json({
  //           error: 'That username already exists. Please choose another.'
  //         });
  //       } else {
  
  //         db.Reviews.updateMany(
  //           {
  //             "reviewComments.user": user
  //           },  
  //           {
  //             $set: {
  //               "reviewComments.$.user": userName
  //             }
  //           },
  //           (error, data) => {
  //             if (error) {
  //               res.send(error);
  //             } else {
  //               res.send(data);
  //             }
  //           },
  //           (error, data) => {
  //             if (error) {
  //               res.send(error);
  //             } else {
  //               res.send(data);
  //             }
  //           }
  //         );
  
  //       }
  //     });
  //   }

  // }
// }