const mongoose = require("mongoose");
const playerModal = mongoose.model("player");

exports.getAllPlayerData = async (req, res) => {
  const player = await playerModal.find();
  return player;
};
exports.addOnePlayer = async (req, res) => {  
  const result = await playerModal.create(req.body);
  return result;
};
