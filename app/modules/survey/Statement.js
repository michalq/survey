const StatementType = require('./StatementType');

/**
 * Class represents single question or statement with options.
 */
class Statement
{
    /**
     * @param  {Number} id
     * @param  {String} title
     * @param  {Numeric} type
     * @param  {Array} responses
     */
    constructor(id, title, type, responses) {
        /**
         * Statement identifier.
         * @type {Number}
         */
        this.id = id;

        /**
         * Statement title.
         * @type {String}
         */
        this.title = title;

        /**
         * @type {Number}
         */
        this.minValue = 0;

        /**
         * @type {Number}
         */
        this.maxValue = 100;

        /**
         * Response type.
         * @type {Numeric}
         */
        this.type = type;

        if (StatementType.Short == type) {
            this.minValue = 0;
            this.maxValue = 2;
        }

        if (type == StatementType.Custom && responses.length > 0) {
            /**
             * Custom responses.
             * @type {Array}
             */
            this.responses = responses;
        }
    }

    /**
     * @param  {Numeric} type
     */
    set type(type) {
        console.log('test');
        if (this.allowedTypes.indexOf(type) == -1) {
            throw new Error('Type ' + type + 'is not allowed.');
        }

        this._type = type;
    }

    /**
     * @return {Numeric}
     */
    get type() {
        return this._type;
    }

    /**
     * @return {String}
     */
    get responses() {
        if (this.type == StatementType.Short) {
            return {
                "type": StatementType.Short,
                "data": [
                    {
                        "label": "Yes",
                        "value": 1
                    },
                    {
                        "label": "No",
                        "value": 0
                    },
                    {
                        "label": "I don't know",
                        "value": 2
                    }
                ]
            };
        }

        if (this.type == StatementType.Percentage) {
            return {
                "type": StatementType.Percentage,
                "data": {
                    "start": 0,
                    "end": 100
                }
            };
        }

        if (this.type == StatementType.Custom) {
            return {
                "type": StatementType.Custom,
                "data": this.responses
            };
        }

        return {
            type: null
        };
    }

    /**
     * Set custom responses.
     * @param {Object} responses
     */
    set responses(responses) {
        if (this.type != StatementType.Custom) {
            throw new Error('This statement doesn\'t allow to custom responses.');
        }

        let usedIds = [];
        for (let i = 0; i < responses.length; i++) {
            const response = responses[i];
            if (typeof response.label != 'undefined' || !response.label) {
                throw new Error('Response label cannot be empty for statement ' + this.title);
            }

            if (typeof response.id != 'undefined' || !response.id) {
                throw new Error('Response identifier cannot be empty for statement ' + this.title);
            }

            if (usedIds.indexOf(response.id) == -1) {
                throw new Error('Response identifier is not unique for statement ' + this.title);
            }

            usedIds.push(response.id);
        }

        this.responses = responses;
    }

    /**
     * Returns json representation of statement.
     * @return {Object}
     */
    get json() {
        return {
            id: this.id,
            title: this.title,
            response: this.responses
        };
    }

    /**
     * Returns type.
     * @return {Number}
     */
    get type() {
        return this.responseType;
    }

    /**
     * Set type of response.
     * @param {Number}
     */
    set type(type) {
        this.responseType = type;
    }
}

module.exports = Statement;