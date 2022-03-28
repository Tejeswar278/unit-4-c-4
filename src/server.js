const express = require("express");

const connect = require("./config/db");

const app = express();
app.use(express.json());

const {signup, signin} = require("./controller/auth.controller")
const userController = require("./controller/user.controller")

app.post("/signup", signup);
app.post("/signin", signin);

app.use("/users", userController)

const start = async () => {
    await connect();

    app.listen(5002, () => {
            console.log("Listening on port 5002");
    });
};

module.exports = start;