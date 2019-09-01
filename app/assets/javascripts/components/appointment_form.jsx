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

  setAptTime(e){
    var name = "input_apt_time";
    obj={};
    if (obj[name] = e.toDate()){
      this.props.onUserInput(obj);
    }
  }

  render(){
    return(
      <div>
        <h2> Make a new appointment</h2>
        <form onSubmit = {this.handleSubmit.bind(this)}>
          <input name = "input_title" placeholder="Appointment Title" value= {this.props.input_title} onChange={this.handleChange.bind(this)}/>
          <Datetime input={false} open={true} inputProps={{name: "input_apt_time"}} value= {this.props.input_apt_time} onChange={this.setAptTime.bind(this)} />
          <input type = "submit" value="Make Appointment"/>
        </form>
      </div>
    )
  }
}
