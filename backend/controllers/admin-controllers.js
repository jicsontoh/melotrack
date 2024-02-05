const HttpError = require("../models/http-error");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const login = async (req, res, next) => {
  const { username, password } = req.body;

  if (username !== process.env.USERNAME) {
    console.log(username);
    console.log(process.env.USERNAME);
    const error = new HttpError(
      "Invalid credentials, could not log you in.",
      401
    );
    return next(error);
  }

  let isValidPassword = false;
  try {
    hashedPassword = await bcrypt.hash(process.env.PASSWORD, 12);
    isValidPassword = await bcrypt.compare(password, hashedPassword);
  } catch (err) {
    const error = new HttpError(
      "Could not log you in, please check your credentials and try again.",
      500
    );
    return next(error);
  }

  if (!isValidPassword) {
    const error = new HttpError(
      "Invalid credentials, could not log you in.",
      403
    );
    return next(error);
  }

  let token;
  try {
    token = jwt.sign(
      { userId: username, username: username },
      process.env.PRIV_KEY,
      { expiresIn: "12h" }
    );
  } catch (err) {
    const error = new HttpError(
      "Logging in failed, please try again later.",
      500
    );
    return next(error);
  }

  res.status(201).json({
    user: { username: username, password: hashedPassword },
    token: token,
  });
};

exports.login = login;
