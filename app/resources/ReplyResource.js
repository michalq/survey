const BaseResource = require('./BaseResource');

/**
 *
 */
class ReplyResource extends BaseResource {
    /**
     * Add replies to survey.
     *
     * @return {Promise}
     */
    insertReplies(surveyId, createdAt, replies) {
        const isoCreatedAt = createdAt.format("YYYY-MM-DD HH:mm:ss");
        let values = replies.map((val) => {
            return [surveyId, val.statementId, val.value, isoCreatedAt];
        });
        return new Promise((resolve, reject) => {
            const query = this.connection.query(
                'INSERT INTO replies (survey_id, statement_id, value, created_at) VALUES ?',
                [values],
                (error, results, fields) => {
                    if (error) {
                        reject(error);
                    }

                    resolve(results);
                }
            );
        });
    }
}

module.exports = ReplyResource;