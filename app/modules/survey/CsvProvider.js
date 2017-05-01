const BaseProvider = require('./BaseProvider');

/**
 * Parse CSV file and create survey.
 */
class CsvProvider extends BaseProvider
{
    static get TYPE() {
        return 'csv';
    }

    /**
     * @param  {String} fileSource
     */
    constructor(fileSource) {
        this.fileSource = fileSource;
    }

    parse() {
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

module.exports = CsvProvider;