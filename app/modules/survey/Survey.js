const Statement = require('./Statement');

/**
 * Class represents single survey.
 */
class Survey
{
    constructor() {
        /**
         * Survey identifier.
         * @type {Number}
         */
        this.id = null;
        /**
         * Survey title.
         * @type {String}
         */
        this.title = "";
        /**
         * Description of survey.
         * @type {String}
         */
        this.description = "";

        /**
         * Contains all questions or statements.
         * @type {Array}
         */
        this.statements = [];
    }

    /**
     * @param {String} title
     * @param {Number} type
     * @param {Array} responses
     */
    addStatement(id, title, type, responses) {
        this.statements.push(
            new Statement(id, title, type, responses)
        );
    }

    get json() {
        const json = {
            id: this.id,
            title: this.title,
            description: this.description,
            statements: []
        };

        for (let i = 0; i < this.statements.length; i++) {
            const statement = this.statements[i];
            json.statements.push(statement.json);
        }

        return json;
    }
}

module.exports = Survey;