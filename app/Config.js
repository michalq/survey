class Config {
    constructor() {
        this.db = {
            provider:  process.env.DB_PROVIDER || null,
            host:  process.env.DB_HOST || null,
            port: process.env.DB_PORT || null,
            user:  process.env.DB_USER || null,
            pass:  process.env.DB_PASS || null
        };

        this.survey = {
            provider: process.env.SURVEY_PROVIDER || 'json',
            source: process.env.SURVEY_SRC || (__dirname + '/data/test_survey.json')
        };
    }
}

module.exports = new Config();