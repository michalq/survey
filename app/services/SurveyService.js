const CsvProvider = require('../modules/survey/CsvProvider');
const JsonProvider = require('../modules/survey/JsonProvider');

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

        let provider = null;
        switch (config.survey.provider) {
            case CsvProvider.TYPE:
                provider = new CsvProvider(config.survey.source);
                break;
            case JsonProvider.TYPE:
                provider = new JsonProvider(config.survey.source);
                break;
            default:
                throw new Error('Provider not allowed.');
        }
        this.survey = provider.getSurvey();
        return this.survey;
    }
}

module.exports = SurveyService;