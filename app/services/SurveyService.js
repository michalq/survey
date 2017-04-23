const CsvProvider = require('../modules/survey/CsvProvider');

/**
 *
 */
class SurveyService {

    /**
     * @return {[type]} [description]
     */
    constructor() {
        /**
         * @type {Survey}
         */
        this.survey = null;
    }

    /**
     * Returns current survey data.
     * @return {Object}
     */
    getSurvey() {
        if (null != this.survey) {
            return this.survey;
        }

        if (CsvProvider.TYPE != Config.survey.provider) {
            throw new Error('Only csv provider for survey is allowed.');
        }

        const provider = new CsvProvider(Config.survey.source);
        this.survey = provider.getSurvey();
        return this.survey;
    }
}