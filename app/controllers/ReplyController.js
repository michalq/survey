const ReplyResource = require('../resources/ReplyResource');
const SurveyService = require('../services/SurveyService');
const Controller = require('./BaseController');
const mysql = require('mysql');

/**
 *
 */
class ReplyController extends Controller {
    /**
     * Handles http action of new reply.
     */
    newReplyAction(res, req) {
        const surveyService = new SurveyService();
        const survey = surveyService.getSurvey();

        if (typeof req.body != 'object' || typeof req.body.data != 'object') {
            this.displayBadRequest('Wrong POST payload.');
            return;
        }

        const validator = this.validateReplies(survey, req.body.data);
        if (validator.errors.length) {
            this.displayBadRequest(validator.errors);
            return;
        }

        const replies = [];

        const connection = mysql.createConnection({
            host: config.db.host,
            user: config.db.user,
            password: config.db.password,
            database: config.db.database
        });

        const replyResource = new ReplyResource(connection);

        replyResource.insertReplies(survey.id, replies)
            .then((data) => {
                res.statusCode = 201;
                res.json({
                    success: true
                });
            })
            .catch((err) => {
                this.displayInternalError(err);
            });
    }

    validateReplies(survey, replies) {
        let errors = [];
        let repliesRemapped = [];
        let repliesValidated = [];
        for (let i = 0; i < replies.length; i++) {
            const reply = replies[i];
            repliesRemapped[reply.statementId] = reply;
        }

        for (let i = 0; i < survey.statements.length; i++) {
            const statement = survey.statements[i];
            const reply = repliesRemapped[statement.id];

            if (typeof reply == 'undefined') {
                errors.push({
                    statementId: statement.id,
                    message: "No answer.",
                    code: "NO_ANSWER"
                });
                continue;
            }

            reply.value = parseInt(reply.value);
            if (isNaN(reply.value)) {
                errors.push({
                    statementId: statement.id,
                    message: "Value is not a number.",
                    code: "NAN_ANSWER"
                });
                continue;
            }

            if (reply.value < statement.minValue || reply.value > statement.maxValue) {
                errors.push({
                    statementId: reply.statementId,
                    message: "Value is incorrect. Should be between " + statement.minValue + " and " + statement.maxValue,
                    code: "WRONG_VALUE"
                });
                continue;
            }

            repliesValidated.push(reply);
        }

        return {
            errors: errors,
            replies: repliesValidated
        };
    }
}

module.exports = ReplyController;