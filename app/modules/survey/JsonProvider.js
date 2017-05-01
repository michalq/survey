const BaseProvider = require('./BaseProvider');

class JsonProvider extends BaseProvider
{
    static get TYPE() {
        return 'json';
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

module.exports = JsonProvider;