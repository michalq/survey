
class StatementType
{
    /**
     * Allowed statement types.
     * @return {Array}
     */
    static get allowedTypes() {
        return [
            StatementType.Custom,
            StatementType.Short,
            StatementType.Percentage,
            StatementType.Strength,
            StatementType.Text
        ];
    }

    /**
     * Reply as an short answer yes or no.
     */
    static get Short() {
        return 1;
    }

    /**
     * Reply in percent in 0-100.
     */
    static get Percentage() {
        return 2;
    }

    /**
     * Statement with 6 options from 0 to 5.
     */
    static get Strength() {
        return 3;
    }

    /**
     * Statement with just text field.
     */
    static get Text() {
        return 4;
    }

    /**
     * Custom type.
     */
    static get Custom() {
        return 0;
    }
}

module.exports = StatementType;