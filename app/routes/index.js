const express = require('express');
const router = express.Router();

const IndexController = require('../controllers/IndexController.js');

/* GET survey */
router.get('/', (req, res, next) => {
    (new IndexController()).getSurveyAction();
});

module.exports = router;