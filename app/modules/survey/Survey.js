/**
 * Class represents single survey.
 */
class Survey
{
    constructor() {
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
    addStatement(title, type, responses) {
        const preparedNode = new Statement(title, type, responses);

        this.statements.push(preparedNode);
    }

    get json() {
        const json = {
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