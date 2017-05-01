const CsvProvider = require('../modules/survey/CsvProvider.js');
const JsonProvider = require('../modules/survey/JsonProvider.js');

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

        switch (Config.survey.type) {
            case CsvProvider.TYPE:
                const provider = new CsvProvider(Config.survey.source);
                break;
            case JsonProvider.TYPE:
                const provider = new JsonProvider(Config.survey.source);
                break;
            default:
                throw new Error('Provider not allowed.');
        }
        this.survey = provider.getSurvey();
        return this.survey;
    }
}

module.exports = SurveyService;