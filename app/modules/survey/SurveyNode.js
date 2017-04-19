/**
 * Class represents single question with options.
 */
class SurveyNode {
    construct() {

    }

    get TYPE_CUSTOM() {
        return 1;
    }

    /**
     *
     * @return {String}
     */
    get question() {
        return '';
    }

    /**
     * Returns options to survey.
     * @return {Array}
     */
    get options() {
        return [];
    }

    /**
     * Returns type of surcey.
     * @return {Number}
     */
    get type() {
        //
    }
}