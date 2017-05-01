const SurveyService = require('../services/SurveyService');

class SurveyController {
    constructor(res, req) {
        this.res = res;
        this.req = req;
        this.surveyService = new SurveyService();
    }

    /**
     * Handles action of providing survey.
     * @api
     * @return {Survey}
     */
    getSurveyAction() {
        try {
            console.log('test');
            const survey = this.surveyService.getSurvey();
            console.log(survey);
            res.json({
                success: true,
                data: survey.json
            });
        } catch (err) {
            res.json({
                success: false,
                error: {
                    message: err.getMessage()
                }
            });
        }
    }
}

module.exports = SurveyController;