import {Statements} from "Statements";

/**
 *
 */
export class Landing extends React.Component
{
  beginSurvey() {
    const startPage = document.querySelector('.start-page');
    const statementsBox = document.querySelector('.statements-box');
    startPage.classList.add('animated');
    startPage.classList.add('fadeOut');
    startPage.addEventListener('animationend', e => {
      startPage.classList.add('hidden');
      statementsBox.classList.remove('hidden');
      Statements.toggleStatemenent(0);
    });
  }

  render() {
    const title = this.props.title;
    const description = this.props.description;

    return (
      <div className="jumbotron start-page text-center">
        <h1 className="display-3">{title}</h1>
        <p className="lead">{description}</p>
        <hr className="my-4"/>
        <button type="" className="btn btn-primary btn-lg" onClick={this.beginSurvey}>Begin »</button>
      </div>
    )
  }
}