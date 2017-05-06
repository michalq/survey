const BaseProvider = require('./BaseProvider');

class JsonProvider extends BaseProvider
{
    static get TYPE() {
        return 'json';
    }

    /**
     * @param {String} fileSource
     */
    constructor(fileSource) {
        super();
        this.fileSource = fileSource;
    }

    parse() {
        this.survey = {};
        return true;
    }

    getSurvey() {
        if (null != this.survey) {
            return this.survey;
        }

        this.parse();
        return this.survey;
    }
}

module.exports = JsonProvider;