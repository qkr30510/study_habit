const express = require("express");
const board = require("./board");
const user = require("./user");

const router = express.Router();

router.get("/", (req, res) => {
    res.render("main");
});

// 게시판
router.use("/board", board);
// 유저관련
router.use("/user", user);

module.exports = router;
