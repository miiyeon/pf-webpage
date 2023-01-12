const express = require("express");
const app = express();
require("dotenv").config();
const compression = require("compression");
const path = require("path");
const { PORT = 3001 } = process.env;

//DB
const { getAllNews, getTheBossData } = require("./db");

app.use(compression());

app.use(express.static(path.join(__dirname, "..", "client", "public")));

app.get("/user/id.json", (req, res) => {
    // console.log("SERVER REQUEST SESSION: ", req.session);
    res.json({
        userID: null,
    });
});

app.get("/newsfeed", (req, res) => {
    console.log("newsfeed");
    return getAllNews().then((news) => res.json(news));
});

app.get("/boss", (req, res) => {
    console.log("boss");
    getTheBossData().then((data) => res.json(data));
});

// ------------------------------ LOGIN ----------------------------->>>

app.post("/login", async (req, res) => {
    try {
        console.log("request body login ", req.body);
    } catch (error) {
        throw Error("Something went wrong at login");
    }
});

// ------------------------------------------------------------------>>>

// ------------------------------ CATS ------------------------------>>>

app.get("/queenMui", (req, res) => {
    // console.log("queen Mui page");
});

app.get("/queenElvy", (req, res) => {
    // console.log("queen Elvy page");
});

app.get("/king", (req, res) => {
    // console.log("king page");
});

// ------------------------------------------------------------------>>>

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "..", "client", "index.html"));
});

app.listen(PORT, function () {
    console.log(`Express server listening on port ${PORT}`);
});
