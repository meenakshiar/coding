const express = require('express');

const router = express.Router();

router.get('/test-me1', function (req, res) {
    res.send('My first ever api!')
});

router.get('/test-me2', function (req, res) {
    res.send('My second api!')
});
router.get('/test-me3', function (req, res) {
    res.send('My first ever api!')
});

router.get('/test-me4', t (req, res) {
    res.send('My first ever api!')
});

router.get('/test-me5', function (req, res) {
    res.send('My first ever api!')
});


module.exports = router;
// adding this comment for no reason