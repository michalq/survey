const replyResource = require('../resource/ReplyResource');
const SurveyService = require('../services/SurveyService');

/**
 *
 */
class ReplyController {
    /**
     *
     */
    constructor(res, req) {
        this.res = res;
        this.req = req;
    }

    /**
     * Handles http action of new reply.
     */
    newReplyAction() {
        const surveyService = new SurveyService();
        const survey = this.surveyService.getSurvey();

        const replies = [];
        const replyResource = new ReplyResource(connection);
        replyResource.newReplies(survey.id, replies);

        this.res.statusCode = 201;
        this.res.json({
            success: true
        });
    }

    validateReplies(survey, replies) {
        let errors = [];
        let repliesRemapped = [];
        let repliesValidated = [];
        for (let i = 0; i < replies.length; i++) {
            const reply = replies[i];
            repliesRemapped[reply.statement_id] = reply;
        }

        for (let i = 0; i < survey.statements.length; i++) {
            const statement = survey.statements[i];
            const reply = repliesValidated[statement.id];
            reply.value = parseInt(reply.value);

            if (isNaN(reply.value)) {
                errors.push({
                    statement_id: statement.id,
                    message: "Value is not a number.",
                    code: "NAN_ANSWER"
                });
                continue;
            }

            if (typeof reply == 'undefined') {
                errors.push({
                    statement_id: statement.id,
                    message: "No answer.",
                    code: "NO_ANSWER"
                });
                continue;
            }

            if (reply.value < statement.minValue || reply.value > statement.maxValue) {
                errors.push({
                    statement_id: reply.statement_id,
                    message: "Value is incorrect.",
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