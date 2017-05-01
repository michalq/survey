const express = require('express');
const router = express.Router();

const SurveyController = require('../controllers/SurveyController.js');

/* GET survey */
router.get('/survey', (req, res, next) => {
    (new SurveyController(res, req)).getSurveyAction();
});

/* POST reply to survey */
router.post('/survey/:id/reply', (req, res, next) => {
    console.log('New survey reply.');
});

module.exports = router;