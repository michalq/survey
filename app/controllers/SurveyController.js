const SurveyService = require('../services/SurveyService');
const Controller = require('./BaseController');

class SurveyController extends Controller
{
    constructor(res, req) {
        super(res, req);
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
            console.log(survey);
            this.res.json({
                success: true,
                data: survey.json
            });
        } catch (err) {
            console.log(err);
            this.http500(err.message);
        }
    }
}

module.exports = SurveyController;