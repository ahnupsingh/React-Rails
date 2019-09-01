class AppointmentForm extends React.Component{
  handleChange(e){
    var name = e.target.name;
    obj = {};
    obj[name] = e.target.value;
    this.props.onUserInput(obj);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.onFormSubmit();
  }
  render(){
    return(
      <div>
        <h2> Make a new appointment</h2>
        <form onSubmit = {this.handleSubmit.bind(this)}>
          <input name = "input_title" placeholder="Appointment Title" value= {this.props.input_title} onChange={this.handleChange.bind(this)}/>
          <input name = "input_apt_time" placeholder="Date and Time" value= {this.props.input_apt_time} onChange={this.handleChange.bind(this)}/>
          <input type = "submit" value="Make Appointment"/>
        </form>
      </div>
    )
  }
}
