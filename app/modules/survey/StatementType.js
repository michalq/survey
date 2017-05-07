
class StatementType
{
    /**
     * Allowed statement types.
     * @return {Array}
     */
    get allowedTypes() {
        return [
            StatementType.Short,
            StatementType.Percentage,
            StatementType.Custom
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
     * Custom type.
     */
    static get Custom() {
        return 3;
    }
}

module.exports = StatementType;