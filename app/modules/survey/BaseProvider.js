/**
 * Providers for questions in survey could be different, thus there is need to
 * provide one base class which will be extended later.
 */
class BaseProvider
{
    /**
     * Returns collection of survey nodes.
     * @return {Survey}
     */
    getSurvey() {
        throw new Error('Method getSurvey() is not implemented.');
    }
}

module.exports = BaseProvider;