class SurveyService {
  /**
   * @return {Promise}
   */
  static getSurvey() {
    return fetch('/api/v1/survey')
      .then(checkStatus)
      .then((data) => {
        return data.json();
      });
  }

  /**
   * @param  {Object} replies
   * @return {Promise}
   */
  static sendReplies(replies) {
    return fetch('/api/v1/survey/reply',
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({data: replies})
      })
      .then(checkStatus)
      .then((data) => {
        return data.json();
      });
  }
}