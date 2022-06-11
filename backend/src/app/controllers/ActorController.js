const Actor = require("../models/Actor");

const ActorController = {
  getAll: async (req, res) => {
    try {
      const allActor = await Actor.find();
      res.json({
        success: true,
        message: "Get All Actor",
        allActor: allActor,
      });
    } catch (error) {
      res.json({
        success: false,
        message: error,
      });
    }
  },
  create: async (req, res) => {
    const dataActor = req.body;
    const newActor = new Actor(dataActor);
    await newActor.save();
    res.json({
      success: true,
      actor: newActor,
    });
  },
  update: async (req, res) => {
    try {
      await Actor.findOneAndUpdate({ _id: req.params.id }, req.body);
      res.json({ success: true, message: "Actor updated" });
    } catch (error) {
      res.json({
        success: false,
        message: error,
      });
    }
  },
  delete: async (req, res) => {
    try {
      await Actor.deleteOne({ _id: req.params.id });
      res.json({ success: true, message: "Actor deleted" });
    } catch (error) {
      res.json({
        success: false,
        message: error,
      });
    }
  },
};

module.exports = ActorController;
