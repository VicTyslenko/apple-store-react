const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

app.use(express.json());
const apiRouter = require("./routers/products.api");
const usersApiRouter = require("./routers/users.api");
const authApiRouter = require("./routers/auth.api");

app.use(cors());
app.use(express.static("./public"));
app.use(express.urlencoded({ extended: true }));
const urlencodedParser = express.urlencoded({ extended: false });
const PORT = process.env.PORT || 4444;

const MONGO_URL =
  "mongodb+srv://user_86:1986@app-store.wyfghml.mongodb.net/?retryWrites=true&w=majority";
app.use(apiRouter);
app.use("/api", urlencodedParser, usersApiRouter);
app.use("/auth", urlencodedParser, authApiRouter);

app.get("/test", (req, res) => {
  console.log("server started");
  res.send("server response");
});

app.all("*", (request, response) => {
  response.status(404).send("resource not found");
});
const start = async () => {
  try {
    // mongoose
    //   .connect(MONGO_URL, {
    //     useNewUrlParser: true,
    //   })
    //   .then(() => {
    //     console.log("DB OK");
    //   })
    //   .catch((err) => console.log("DB error", err));

    app.listen(PORT, () => {
      console.log(`Server is running on :${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
