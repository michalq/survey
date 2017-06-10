import {Question} from 'Question';

/**
 *
 */
export class QuestionTextField extends Question
{
  handleChange(event) {
    this.setState({valueText: event.target.value});
  }

  render() {
    const title = this.props.title;
    const statementNo = this.id;

    return (
      <div className="card question-card hidden">
        <div className="card-block">
          <h4 className="card-title">{title}</h4>
          {this.state.error ? <p className="alert alert-danger"><strong>Error</strong> {this.state.error}</p> : null}
        </div>
        <div className="card-block">
          <div className="card-text">
            <textarea
              className="form-control"
              id={'statement-' + statementNo + '-input-0'}
              name={'responseText[' + statementNo + ']'}
              placeholder="Type something…"
              onChange={this.handleChange}></textarea>
          </div>
        </div>
      </div>
    )
  }
}