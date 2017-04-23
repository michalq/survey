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
            const survey = this.surveyService.getSurvey();
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