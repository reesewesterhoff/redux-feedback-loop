
const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.post('/', (req, res) => {
    let feedback = req.body;
    pool.query(`INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                VALUES ($1, $2, $3, $4);`, [feedback.feeling, feedback.understanding, feedback.support, feedback.comments])
    .then(() => {
        res.sendStatus(201);
    }).catch(error => {
        console.log('error', error);
        res.sendStatus(500);
    });
});


module.exports = router;