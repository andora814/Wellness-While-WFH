const Tip = require('../models/tip');
const Pose = require('../models/pose');

const getAllTips = async (req, res) => {
  try {
    const tips = await Tip.find();
    return res.status(200).json({ tips });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getTipById = async (req, res) => {
  try {
    const { id } = req.params;
    const tip = await Tip.findById(id);
    if (tip) {
      return res.status(200).json({ tip });
    }
    return res.status(404).send('Tip with the specified ID does not exist');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const createTip = async (req, res) => {
  try {
    const tip = await new Tip(req.body);
    await tip.save();
    return res.status(201).json({
      tip
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const updateTip = async (req, res) => {
  try {
    const { id } = req.params;
    await Tip.findByIdAndUpdate(id, req.body, { new: true }, (err, tip) => {
      return res.status(200).json(tip);
    });
  } catch (error) {}
};

const deleteTip = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Tip.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send('Tip deleted');
    }
    throw new Error('Tip not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getAllPoses = async (req, res) => {
  try {
    const poses = await Pose.find();
    return res.status(200).json({ poses });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const createPose = async (req, res) => {
  try {
    const pose = await new Pose(req.body);
    await pose.save();
    return res.status(201).json({
      pose
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deletePose = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Pose.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send('Pose deleted');
    }
    throw new Error('Pose not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  createTip,
  getAllTips,
  getTipById,
  updateTip,
  deleteTip,
  getAllPoses,
  createPose,
  deletePose
};
