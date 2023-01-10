const spicedPg = require("spiced-pg");
const { USER, PASSWORD, DATABASE } = process.env;
const db = spicedPg(`postgres:${USER}:${PASSWORD}@localhost:5432/${DATABASE}`);

// get all news
function getAllNews() {
    return db.query(`SELECT * FROM news`).then((res) => res.rows);
}

// get the boss of this page!
function getTheBossData() {
    return db.query(`SELECT * FROM boss`).then((res) => res.rows);
}

module.exports = {
    getAllNews,
    getTheBossData,
};
