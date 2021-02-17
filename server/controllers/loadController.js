import Load from '../models/load.js';

  export const allLoads = async (req, res) => {
    try {
      const allLoads = await Load.find();
      res.status(200).json(allLoads);
    } catch(error) {
      res.status(400).json({message: error.message});
    }
  }

  export const createLoad = async (req, res) => {
    console.log ("Creating Load: ", req.body)
    const addLoadBody = req.body;
    const newLoad = await new Load(addLoadBody);
    try {
      newLoad.save();
      res.status(200).json({message: newLoad })

    } catch(error) {
      res.status(400).json({message: error.message});
    }
  }
  