const StatementType = require('./StatementType');

/**
 * Class represents single question or statement with options.
 *
 * @TODO This class should be splitted among different statement types without 'if' conditions everywhere.
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

        switch (this.type) {
            case StatementType.Short:
                this.validateValue = true;
                this.validateTextField = false;
                this.minValue = 0;
                this.maxValue = 2;
                break;
            case StatementType.Strength:
                this.validateValue = true;
                this.validateTextField = false;
                this.minValue = 0;
                this.maxValue = 5;
                break;
            case StatementType.Text:
                this.validateValue = false;
                this.validateTextField = true;
                this.minValue = 0;
                this.maxValue = 0;
                break;
            default:
                this.validateValue = true;
                this.validateTextField = false;
                this.minValue = 0;
                this.maxValue = 100;
                break;
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
        if (StatementType.allowedTypes.indexOf(type) == -1) {
            throw new Error('Type no:' + type + ' is not allowed.');
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
        switch (this.type) {
            case StatementType.Short:
                return {
                    type: StatementType.Short,
                    options: {
                        textField: false
                    },
                    data: [
                        {
                            label: "Yes",
                            value: 1
                        },
                        {
                            label: "No",
                            value: 0
                        },
                        {
                            label: "I don't know",
                            value: 2
                        }
                    ]
                };

            case StatementType.Percentage:
                return {
                    type: StatementType.Percentage,
                    options: {
                        textField: false
                    },
                    data: {
                        start: 0,
                        end: 100
                    }
                };

            case StatementType.Strength:
                return {
                    type: StatementType.Strength,
                    options: {
                        textField: false
                    },
                    data: [
                        {
                            label: "0",
                            value: 0
                        },
                        {
                            label: "1",
                            value: 1
                        },
                        {
                            label: "2",
                            value: 2
                        },
                        {
                            label: "3",
                            value: 3
                        },
                        {
                            label: "4",
                            value: 4
                        },
                        {
                            label: "5",
                            value: 5
                        }
                    ]
                };

            case StatementType.Text:
                return {
                    type: StatementType.Text,
                    options: {
                        textField: true
                    },
                    data: {}
                };

            case StatementType.Custom:
                return {
                    type: StatementType.Custom,
                    options: {
                        textField: false
                    },
                    data: this.responses
                };

            default:
                return {
                    type: null
                };
        }
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
}

module.exports = Statement;