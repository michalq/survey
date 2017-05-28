import {Landing} from 'Landing';
import {Statements} from 'Statements';
import {Navi} from 'Navi';

/**
 *
 */
export class Body extends React.Component
{
  constructor(props) {
    super(props);
    this.survey = this.props.survey;
  }

  render() {
    const survey = this.survey;

    return (
      <div>
        <Navi/>
        <div className="container">
          <Landing title={survey.title} description={survey.description} />
          <Statements statements={survey.statements} />
        </div>
      </div>
    )
  }
}