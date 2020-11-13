const express = require("express");
const app = express();
const mongoose = require("mongoose");

(async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://ddock4you:<password>@cluster0.wlayg.mongodb.net/<db>?retryWrites=true&w=majority",
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true,
                useFindAndModify: false,
            }
        );
        console.log("connected DB");
    } catch (err) {
        console.log(err);
    }
})();

app.get("/", (req, res) => res.send("하이염"));
app.post("/test", (req, res) => {});

app.listen(5002, (req, res) => console.log("server on"));
