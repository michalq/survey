import {Question} from 'Question';

/**
 *
 */
export class QuestionQuick extends Question
{
  render() {
    const title = this.props.title;
    const statementNo = this.id;

    return (
      <div className="card question-card hidden">
        <div className="card-block">
          <h4 className="card-title">{title}</h4>
          {this.state.error ? <p className="alert alert-danger"><strong>Error</strong> {this.state.error}</p> : null}
        </div>
        <div className="list-group list-group-flush">
          <label className="list-group-item">
            <input
              id={'statement-' + statementNo + '-input-0'}
              type="radio"
              name={'response[' + statementNo + ']'}
              value="1"
              onChange={this.handleChange} />
            <span style={{marginLeft: "20px"}}>Yes</span>
          </label>
          <label className="list-group-item">
            <input
              id={'statement-' + statementNo + '-input-1'}
              type="radio"
              name={'response[' + statementNo + ']'}
              value="0"
              onChange={this.handleChange} />
            <span style={{marginLeft: "20px"}}>No</span>
          </label>
          <label className="list-group-item">
            <input
              id={'statement-' + statementNo + '-input-2'}
              type="radio"
              name={'response[' + statementNo + ']'}
              value="2"
              onChange={this.handleChange} />
            <span style={{marginLeft: "20px"}}>I don't know</span>
          </label>
        </div>
      </div>
    )
  }
}