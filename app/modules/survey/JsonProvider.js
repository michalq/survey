const BaseProvider = require('./BaseProvider');
const Survey = require('./Survey');
const fs = require('fs');

/**
 *
 */
class JsonProvider extends BaseProvider
{
    static get TYPE() {
        return 'json';
    }

    parse() {
        const rawSurvey = JSON.parse(fs.readFileSync(this.fileSource, 'utf8'));

        this.survey = new Survey();
        this.survey.id = rawSurvey.id;
        this.survey.title = rawSurvey.title;
        this.survey.description = rawSurvey.description;
        for (let i = 0; i < rawSurvey.statements.length; i++) {
            const tmpStatement = rawSurvey.statements[i];
            this.survey.addStatement(
                tmpStatement.id,
                tmpStatement.statement,
                tmpStatement.type
            );
        }

        return this;
    }
}

module.exports = JsonProvider;