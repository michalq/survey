/**
 * Providers for questions in survey could be different, thus there is need to
 * provide one base class which will be extended later.
 */
class BaseProvider
{
    /**
     * @param {String} fileSource
     */
    constructor(fileSource) {
        this.fileSource = fileSource;
    }

    /**
     * Returns collection of survey nodes.
     *
     * @return {Object}
     */
    getSurvey() {
        if (null != this.survey) {
            return this.survey;
        }

        return this.parse().survey;
    }
}

module.exports = BaseProvider;