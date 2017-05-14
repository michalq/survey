
class ReplyResource {
    constructor(connection) {
        /**
         * @type {Object}
         */
        this.connection = connection;
    }

    /**
     * Add replies to survey.
     *
     * @return {Promise}
     */
    insertReplies(surveyId, replies) {
        const post  = {id: 1, title: 'Hello MySQL'};
        return new Promise((resolve, reject) => {
            const query = this.connection.query(
                'INSERT INTO replies () VALUES ?',
                replies,
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