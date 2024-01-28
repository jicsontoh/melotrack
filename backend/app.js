const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");

const HttpError = require("./models/http-error");

// const serviceRoute = require("./routes/service-routes");
// const svcLineRoute = require("./routes/svcLine-routes");
// const announceRoute = require("./routes/announcement-routes");
// const adminRoute = require("./routes/admin-routes");

const app = express();
dotenv.config();

app.use(bodyParser.json());

// app.use("/uploads/images", express.static(path.join("uploads", "images")));

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//   );
//   res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

//   next();
// });

// app.use("/api/admin", adminRoute);

// app.use("/api/svcLine", svcLineRoute);

// app.use("/api/services", serviceRoute);

// app.use("/api/announcements", announceRoute);

// app.use((req, res, next) => {
//   const error = new HttpError("Could not find such path", 404);
//   next(error);
// });

// app.use((error, req, res, next) => {
//   if (req.file) {
//     fs.unlink(req.file.path, (err) => {
//       console.log(err);
//     });
//   }

//   if (res.headerSent) {
//     return next(error);
//   }

//   res.status(error.status || 500);
//   res.json({ message: error.message || "Unknown error occurred" });
// });

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(8080);
  })
  .catch((err) => {
    console.log(err);
  });
