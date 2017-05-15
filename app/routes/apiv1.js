const express = require('express');
const router = express.Router();

const SurveyController = require('../controllers/SurveyController');
const ReplyController = require('../controllers/ReplyController');

/* GET survey */
router.get('/survey', (req, res, next) => {
    (new SurveyController(res, req)).getSurveyAction();
});

/* POST reply to survey */
router.post('/survey/reply', (req, res, next) => {
    (new ReplyController(res, req)).newReplyAction(res, req);
});

module.exports = router;