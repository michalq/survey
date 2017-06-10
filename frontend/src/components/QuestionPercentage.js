import {Question} from 'Question';

/**
 *
 */
export class QuestionPercentage extends Question
{
  handleChange(event) {
    this.setState({value: event.target.value});
    document
      .getElementById('statement-' + this.id + '-input-0-output')
      .innerHTML = event.target.value + '%';
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
        <div className="card-text">
          <output id="rangevalue"></output>
          <div className="clearfix"></div>
          <input
            className="form-control"
            id={'statement-' + statementNo + '-input-0'}
            type="range"
            name={'response[' + statementNo + ']'}
            min="0"
            max="100"
            step="1"
            defaultValue="0"
            onChange={this.handleChange} />
        </div>
        <div className="card-block">
          <div className="card-text">
            <p className="h3 text-center" id={'statement-' + statementNo + '-input-0-output'}>0%</p>
          </div>
        </div>
      </div>
    )
  }
}