/**
 *
 */
export class Question extends React.Component
{
  constructor(props) {
    super(props);
    this.state = {value: ''};
    if (typeof props.id == "undefined" || !props.id) {
      console.log('Statement doesn\'t have privided identifier.');
    }

    this.id = props.id;
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
}