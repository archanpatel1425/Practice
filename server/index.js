const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

// Routers
const bookRouter = require("./routes/BookDetail");
app.use("/bookdata", bookRouter);

  app.listen(5001, () => {
    console.log("Server running on port 5001");
  });
