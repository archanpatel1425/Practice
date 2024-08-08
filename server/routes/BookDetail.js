const express = require('express');
const mysql = require("mysql");
const router = express.Router();

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "hackout",
});

router.get('/book_data', async (req, res) => {
    try {
        db.query("SELECT * FROM books", (err, info) => {
            if (err) {
                console.log(err);
                res.status(500).send(err.message);
            } else {
                console.log(info);
                res.json(info);
            }
        });
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send(error.message);
    }
});

router.get('/book_data/:id', async (req, res) => {
    try {
        const { id } = req.params; 
        db.query(`SELECT * FROM books WHERE id=${mysql.escape(id)}`, (err, info) => {
            if (err) {
                console.log(err);
                res.status(500).send(err.message);
            } else {
                console.log(info);
                res.json(info);
            }
        });
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send(error.message);
    }
});


module.exports = router;
