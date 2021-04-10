const Load = require('../models/load.js');

module.exports = {
  allLoads: (req, res) => {
    try {
      const allLoads = Load.find();
      res.status(200).json(allLoads);
    } catch(error) {
      res.status(400).json({message: error.message});
    }
  },
  createLoad: (req, res) => {
    console.log ("Creating Load: ", req.body)
    const addLoadBody = req.body;
    const newLoad = new Load(addLoadBody);
    try {
      newLoad.save();
      res.status(200).json({message: newLoad })

    } catch(error) {
      res.status(400).json({message: error.message});
    }
  }
}