/**
 * Class represents single question or statement with options.
 */
class Statement {
    construct(title, type, responses) {
        /**
         * Statement title.
         * @type {String}
         */
        this.title = title;

        /**
         * Response type fe. TYPE_CUSTOM for custom, TYPE_PERCENTAGE for percentage etc.
         * @type {[type]}
         */
        this.type = type;

        if (type == this.TYPE_CUSTOM && responses.length > 0) {
            /**
             * Custom responses.
             * @type {Array}
             */
            this.responses = responses;
        }
    }

    /**
     * Reply as an short answer yes or no.
     */
    get TYPE_YES_NO() {
        return 1;
    }

    /**
     * Reply in percent in 0-100.
     */
    get TYPE_PERCENTAGE() {
        return 2;
    }

    /**
     * Custom type.
     */
    get TYPE_CUSTOM() {
        return 3;
    }

    /**
     * @return {String}
     */
    get responses() {
        if (this.type == this.TYPE_YES_NO) {
            return {
                "type": this.TYPE_YES_NO,
                "data": [
                    {
                        "label": "Yes",
                        "value": 1
                    },
                    {
                        "label": "No",
                        "value": 2
                    }
                ]
            };
        }

        if (this.type == this.TYPE_PERCENTAGE) {
            return {
                "type": this.TYPE_PERCENTAGE,
                "data": {
                    "start": 0,
                    "end": 100
                }
            }
        }

        if (this.type == this.TYPE_CUSTOM) {
            return {
                "type": this.TYPE_CUSTOM,
                "data": this.responses
            }
        }
    }

    /**
     * Set custom responses.
     * @param {Object} responses
     */
    set responses(responses) {
        if (this.type != this.TYPE_CUSTOM) {
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