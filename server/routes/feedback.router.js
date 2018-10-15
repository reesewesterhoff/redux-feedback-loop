// routes/feedback.router.js

// requires
const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// POST request to PostgresQL
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
}); // end POST request

// GET request for all data from PostgresQL
router.get('/', (req, res) => {
    pool.query(`SELECT * FROM "feedback"
                ORDER BY "id" DESC`)
    .then(results => {
        res.send(results.rows);
    }).catch(error => {
        console.log('error', error);
        res.sendStatus(500);
    });
}); // end GET request

// DELETE request, find item by id and delete
router.delete('/:id', (req, res) => {
    let id = req.params.id;
    pool.query(`DELETE FROM "feedback"
                WHERE "id"=$1;`, [id])
    .then(() => {
        res.sendStatus(200);
    }).catch(error => {
        console.log('error', error);
        res.sendStatus(500);
    });
}); // end DELETE request

// exports
module.exports = router;