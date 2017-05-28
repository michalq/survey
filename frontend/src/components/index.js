import {SurveyService} from '../services/SurveyService';
import {Body} from 'Body';

SurveyService.getSurvey()
  .then((data) => {
    if (typeof data.success == 'undefined' || !data.success) {
      throw new Error('Error occured while fetching survey.');
    }

    ReactDOM.render(
      <Body survey={data.data}/>,
      document.getElementById('app')
    );
  }).catch((error) => {
    console.log('Request failed', error)
  });