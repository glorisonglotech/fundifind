const Service = require("../models/service");

exports.createService = async (req, res) => {
  const service = await Service.create({ ...req.body, fundi: req.user._id });
  res.status(201).json(service);
};

exports.getServices = async (req, res) => {
  const services = await Service.find().populate("fundi", "name location");
  res.json(services);
};
