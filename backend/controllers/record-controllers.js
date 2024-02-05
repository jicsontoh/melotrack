const HttpError = require("../models/http-error");
const { validationResult } = require("express-validator");
const moment = require("moment");

const Record = require("../models/records");

const getRecords = async (req, res, next) => {
  // get all record
  let records;
  try {
    records = await Record.find({});
  } catch (err) {
    const error = new HttpError(
      "Fetching Records failed, please try again later.",
      500
    );
    return next(error);
  }
  res.status(200).json({
    record: records.map((rec) => rec.toObject({ getters: true })),
  });
};

const getSpecificRecord = async (req, res, next) => {
  // get specific record
  const recordId = req.params.rid;
  let record;

  try {
    record = await Record.findById(recordId);
  } catch (err) {
    const error = new HttpError(
      "Fetching Record failed, please try again later.",
      500
    );
    return next(error);
  }
  res.status(200).json({ record: record.toObject({ getters: true }) });
};

const addRecord = async (req, res, next) => {
  // add new record
  const { country, depart, arrive } = req.body;

  const createdRecord = new Record({
    country: country,
    depart_date: depart,
    arrive_date: arrive,
    days: 10,
  });

  try {
    await createdRecord.save();
  } catch (err) {
    console.log(err);
    const error = new HttpError("Adding record failed", 500);
    return next(error);
  }

  res.status(201).json({ createdRecord });
};

const editRecord = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError("Invalid inputs passed, please check your data.", 422)
    );
  }

  const { country, depart, arrive } = req.body;
  const recordId = req.params.rid;

  let record;
  try {
    record = await Record.findById(recordId);
  } catch (err) {
    const error = new HttpError("Server error, cannot find record", 500);
    return next(error);
  }

  if (!record) {
    const error = new HttpError("Could not find record", 404);
    return next(error);
  }

  record.country = country;
  record.depart_date = depart;
  record.arrive_date = arrive;

  try {
    await record.save();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not update record.",
      500
    );
    return next(error);
  }

  res.status(200).json({ record: record.toObject({ getters: true }) });
};

const deleteRecord = async (req, res, next) => {
  const recordId = req.params.rid;

  let record;
  try {
    record = await Record.findById(recordId);
  } catch (err) {
    const error = new HttpError("Server error, could not delete record.", 500);
    return next(error);
  }

  if (!record) {
    const error = new HttpError("Could not find record", 404);
    return next(error);
  }

  try {
    await record.deleteOne();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not delete record.",
      500
    );
    return next(error);
  }

  res.status(200).json({ message: "Record announcement." });
};

exports.getRecords = getRecords;
exports.getSpecificRecord = getSpecificRecord;
exports.addRecord = addRecord;
exports.editRecord = editRecord;
exports.deleteRecord = deleteRecord;
