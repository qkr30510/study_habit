const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { User } = require("./models/user");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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
app.post("/register", (req, res) => {
    const user = new User(req.body);
    user.save((err) => {
        if (err) return res.send(err);
        return res.send("성공");
    });
});

app.listen(5002, (req, res) => console.log("server on"));
