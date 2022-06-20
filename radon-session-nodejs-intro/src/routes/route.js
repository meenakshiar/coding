const express = require('express');

const router = express.Router();

// router.get('/test-me', function (req, res) {
//     res.send('My first ever api!')
// });

// router.get('/test-me2', function (req, res) {
//     res.send('My second api!')
// });
// router.get('/test-me3', function (req, res) {
//     res.send('My last api!')
// });

router.get('/candidates', function (req, res){
    console.log ('Query parameters for this request are ' + JSON.stringify (req.query))
    let gender = req.query.gender
    let state = req.query.state
    let district = req.query.district
    console.log ('state is ' + state)
    console.log ('gender is ' + gender)
    console.log ('district is '+district) 
    let candidates = ['mee', 'guddu']
    res.send (candidates)
})

router.get('/candidates/:name', function (req, res){
    console.log ('candidates name is' + JSON.stringify(req.params))
    console.log ('candidates name is ' + req.params.name)
    res.send ('done')
})

module.exports = router;
// adding this comment for no reason