const BaseProvider = require('./BaseProvider');
const Survey = require('./Survey');
const fs = require('fs');

/**
 * Parse CSV file and create survey.
 */
class CsvProvider extends BaseProvider
{
    static get TYPE() {
        return 'csv';
    }

    parse() {
        const rawSurvey = fs.readFileSync(this.fileSource, 'utf8').toString().split("\n");
        if (null == rawSurvey) {
            console.log('CSV file is in wrong format.');
            return this;
        }

        this.survey = new Survey();
        this.survey.id = parseInt(rawSurvey[0]);
        this.survey.title = rawSurvey[1];
        this.survey.description = rawSurvey[2];
        for (let i = 3; i < rawSurvey.length; i++) {
            const tmpStatement = this.csvToArray(rawSurvey[i]);
            if (null == tmpStatement) {
                console.log("CSV file is in wrong format.");
                continue;
            }

            this.survey.addStatement(
                parseInt(tmpStatement[0]), // Id
                tmpStatement[2], // Title
                parseInt(tmpStatement[1]) // Type
            );
        }

        return this;
    }

    /**
     * @source https://stackoverflow.com/a/8497474
     *
     * @param {String} text
     *
     * @return {Array}
     */
    csvToArray(text) {
        const reValid = /^\s*(?:'[^'\\]*(?:\\[\S\s][^'\\]*)*'|"[^"\\]*(?:\\[\S\s][^"\\]*)*"|[^,'"\s\\]*(?:\s+[^,'"\s\\]+)*)\s*(?:,\s*(?:'[^'\\]*(?:\\[\S\s][^'\\]*)*'|"[^"\\]*(?:\\[\S\s][^"\\]*)*"|[^,'"\s\\]*(?:\s+[^,'"\s\\]+)*)\s*)*$/;
        const reValue = /(?!\s*$)\s*(?:'([^'\\]*(?:\\[\S\s][^'\\]*)*)'|"([^"\\]*(?:\\[\S\s][^"\\]*)*)"|([^,'"\s\\]*(?:\s+[^,'"\s\\]+)*))\s*(?:,|$)/g;
        // Return NULL if input string is not well formed CSV string.
        if (!reValid.test(text)) return null;
        const a = [];
        text.replace(reValue, (m0, m1, m2, m3) => {
            if (m1 !== undefined) {
                // Remove backslash from \' in single quoted values.
                a.push(m1.replace(/\\'/g, "'"));
            } else if (m2 !== undefined) {
                // Remove backslash from \" in double quoted values.
                a.push(m2.replace(/\\"/g, '"'));
            } else if (m3 !== undefined) {
                a.push(m3);
            }

            return '';
        });

        if (/,\s*$/.test(text)) {
            // Handle special case of empty last value.
            a.push('');
        }

        return a;
    };
}

module.exports = CsvProvider;