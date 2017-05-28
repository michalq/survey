import {QuestionPercentage} from 'QuestionPercentage';
import {QuestionQuick} from 'QuestionQuick';
import {Pagination} from 'Pagination';
import {FinishPage} from 'FinishPage'
import {SurveyService} from '../services/SurveyService';

/**
 *
 */
export class Statements extends React.Component
{

  static showStatement(statementNo) {
    const questionCard = document.querySelectorAll('.question-card')[statementNo];
    questionCard.classList.remove('hidden');
  }

  static hideStatements(callback) {
    const questionCards = document.querySelectorAll('.question-card');
    if (questionCards.length) {
      let val = '';
      for (let i = 0; i < questionCards.length; i++) {
        val = questionCards[i];
        val.classList.add('hidden');
      }
    }

    callback();
  }

  static toggleStatemenent(statementNo) {
    Statements.hideStatements(() => {
      Statements.showStatement(statementNo);
    });
  }

  /**
   * @param  {Array} props
   */
  constructor(props) {
    super(props);

    this.sendResponses = this.sendResponses.bind(this);

    /**
     * @type {Array}
     */
    this.statements = [];
  }

  /**
   * @param  {Object} e
   * @return {Void}
   */
  sendResponses(e) {
    e.preventDefault();
    const formData = [];
    for (let i = 0; i < this.statements.length; i++) {
      formData[i] = {
        statementId: this.statements[i].id,
        value: this.statements[i].state.value
      };
    }

    SurveyService.sendReplies(formData)
      .then((data) => {
        ReactDOM.render(
          <FinishPage/>,
          document.getElementById('app')
        );
      }).catch((data) => {
        data.response.json().then((data) => {
          if (typeof data.error != 'undefined') {
            console.log(data.error);
            // Oh I know that's ugly, here could fit sweetalert2, but I don; like frontend anyway.
            alert(data.error.message);
            return;
          }

          let i = 0;
          const errorsRemapped = [];
          for (let i = 0; i < data.errors.length; i++) {
            errorsRemapped[data.errors[i].statementId] = data.errors[i];
          }

          for (let i = 0; i < this.statements.length; i++) {
            const stat = this.statements[i];
            const err = errorsRemapped[stat.id];
            let errorMsg = '';
            if (typeof err != 'undefined') {
              errorMsg = err.message;
            }

            stat.setState({
              value: stat.state.value,
              error: errorMsg
            });
          }
        });
      });
  }

  /**
   * @return {Object}
   */
  render() {
    const statements = this.props.statements;
    let domStatements = [];
    for (let i = 0; i < statements.length; i++) {
      const statement = statements[i];
      if (1 == statement.response.type) {
        domStatements.push(
          <QuestionQuick
            id={statement.id}
            key={i}
            ref={(statement) => { this.statements.push(statement); }}
            title={statement.title}
            responses={statement.response} />
        );
      } else if (2 == statement.response.type) {
        domStatements.push(
          <QuestionPercentage
            id={statement.id}
            key={i}
            ref={(statement) => { this.statements.push(statement); }}
            title={statement.title}
            responses={statement.response} />
        );
      }
    }

    return (
      <form onSubmit={this.sendResponses} className="statements-box hidden" style={{height: "350px"}}>
        {domStatements}
        <Pagination pages={statements.length}/>
      </form>
    );
  }
}