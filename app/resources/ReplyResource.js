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
    insertReplies(surveyId, createdAt, userHash, replies) {
        const isoCreatedAt = createdAt.format("YYYY-MM-DD HH:mm:ss");
        let values = replies.map((val) => {
            return [surveyId, val.statementId, val.value, isoCreatedAt, userHash];
        });
        return new Promise((resolve, reject) => {
            const query = this.connection.query(
                'INSERT INTO replies (survey_id, statement_id, value, created_at, user_hash) VALUES ?',
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