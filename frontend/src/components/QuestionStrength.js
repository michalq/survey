import {Question} from 'Question';

/**
 *
 */
export class QuestionStrength extends Question
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
        <div className="card-block">
          <div className="row">
            <div className="col text-center">
            <label className="">
              <input
                id={'statement-' + statementNo + '-input-0'}
                type="radio"
                name={'response[' + statementNo + ']'}
                value="0"
                onChange={this.handleChange} />
              <br/>
              <span style={{marginLeft: "20px"}}>0</span>
            </label>
            </div>
            <div className="col text-center">
            <label className="">
              <input
                id={'statement-' + statementNo + '-input-1'}
                type="radio"
                name={'response[' + statementNo + ']'}
                value="1"
                onChange={this.handleChange} />
              <br/>
              <span style={{marginLeft: "20px"}}>1</span>
            </label>
            </div>
            <div className="col text-center">
            <label className="">
              <input
                id={'statement-' + statementNo + '-input-2'}
                type="radio"
                name={'response[' + statementNo + ']'}
                value="2"
                onChange={this.handleChange} />
              <br/>
              <span style={{marginLeft: "20px"}}>2</span>
            </label>
            </div>
            <div className="col text-center">
            <label className="">
              <input
                id={'statement-' + statementNo + '-input-3'}
                type="radio"
                name={'response[' + statementNo + ']'}
                value="3"
                onChange={this.handleChange} />
              <br/>
              <span style={{marginLeft: "20px"}}>3</span>
            </label>
            </div>
            <div className="col text-center">
            <label className="">
              <input
                id={'statement-' + statementNo + '-input-4'}
                type="radio"
                name={'response[' + statementNo + ']'}
                value="4"
                onChange={this.handleChange} />
              <br/>
              <span style={{marginLeft: "20px"}}>4</span>
            </label>
            </div>
            <div className="col text-center">
            <label className="">
              <input
                id={'statement-' + statementNo + '-input-5'}
                type="radio"
                name={'response[' + statementNo + ']'}
                value="5"
                onChange={this.handleChange} />
              <br/>
              <span style={{marginLeft: "20px"}}>5</span>
            </label>
            </div>
          </div>
        </div>
      </div>
    )
  }
}