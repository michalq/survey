class Config {
    constructor() {
        this.db = {
            host: process.env.DB_HOST || null,
            port: process.env.DB_PORT || null,
            user: process.env.DB_USER || null,
            password: process.env.DB_PASS || null,
            database: process.env.DB_DB || null
        };

        this.survey = {
            provider: process.env.SURVEY_PROVIDER || 'json',
            source: process.env.SURVEY_SRC || (__dirname + '/data/test_survey.json')
        };
    }
}

module.exports = new Config();