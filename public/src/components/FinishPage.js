/**
 *
 */
export class FinishPage extends React.Component
{
    render() {
        return (
          <div>
            <div className="finish-page container mx-auto" style={{width: "600px"}}>
              <div className="card text-center">
                <div className="card-block">
                  <h4 className="card-title">Responses were sent.</h4>
                  <p className="card-text h1"><i className="text-success ion-checkmark-circled"></i></p>
                  <p className="card-text">Thanks for your time!</p>
                </div>
                <div className="card-footer text-muted">
                  <p>
                    <small className="text-muted mr-2">&copy; 2017</small>
                    <small className="text-muted mr-2"><a href="mailto:kutrzeba.michal@gmail.com"><i className="ion-paper-airplane"></i> Michał Kutrzeba</a></small>
                  </p>
                  <p className="text-muted h4"><a href="https://www.linkedin.com/in/micha%C5%82-kutrzeba-69134167/"><i className="ion-social-linkedin"></i></a></p>
                </div>
              </div>
            </div>
          </div>
        )
    }
}