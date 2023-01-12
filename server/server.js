const express = require("express");
const app = express();
require("dotenv").config();
const compression = require("compression");
const path = require("path");
const { PORT = 3001, MYSECRET } = process.env;

//DB
const { getAllNews, getTheBossData, getUserByEmail } = require("./db");

//bcrypt and salt
const bcrypt = require("bcryptjs");
// const salt = bcrypt.genSaltSync();

//session cookie
const cookieSession = require("cookie-session");
cookieSession({
    secret: `${MYSECRET}`,
    maxAge: 1000 * 60 * 60 * 24 * 14,
    name: "precious-fate",
});

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

// app.post("/login", async (req, res) => {
//     try {
//         console.log("request body login ", req.body);
//         const { email, password } = req.body;

//         const dbUser = await getUserByEmail(email);
//         // need to hash input pw before comparing
//         console.log("DBUSER: ", dbUser.rows[0].password);
//         const checkPW = bcrypt.compareSync(password, dbUser.rows[0].password);
//         if (checkPW) {
//             req.session.userID = dbUser.rows[0].id;
//             // console.log("SESSION USER ID: ", req.session.userID);
//             res.json({ success: true });
//         } else {
//             res.json({ success: false });
//         }
//     } catch (error) {
//         throw Error("Something went wrong at login");
//     }
// });

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
