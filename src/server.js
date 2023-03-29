const { PORT = 5001 } = process.env;

const app = require("./app");
const listener = () => console.log(`Listening on Port ${PORT}!`);
app.listen(PORT, listener);

// const express = require("express");
// const cors = require("cors");

// const app = require("./app");
// // const router = express.Router();
// const PORT = process.env.PORT || 5001;

// router.get("/", cors(), (req, res) => {
//   res.json({ message: "Hello Beep Boop Bops!" });
// });

// // app.use("/", router);

// app.listen(PORT, () => {
//   console.log(`Server running on ${PORT} `);
// });

// module.exports = app;
