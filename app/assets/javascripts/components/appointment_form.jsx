class AppointmentForm extends React.Component{
  handleChange(e){
    const name = e.target.name;
    obj = {};
    obj[name] = e.target.value;
    this.props.onUserInput(obj);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.onFormSubmit();
  }

  setAptTime(e){
    const name = "input_apt_time";
    obj={};
    if (obj[name] = e.toDate()){
      this.props.onUserInput(obj);
    }
  }

  render(){
    return(
      <div>
        <h2> Make a new appointment</h2>
        <form onSubmit = {(event) => this.handleSubmit(event)}>
          <input name = "input_title" placeholder="Appointment Title" value= {this.props.input_title} onChange={(event) => this.handleChange(event)}/>
          <Datetime input={false} open={true} inputProps={{name: "input_apt_time"}} value= {this.props.input_apt_time} onChange={(event) => this.setAptTime(event)} />
          <input type = "submit" value="Make Appointment" className ="submit-button"/>
        </form>
      </div>
    )
  }
}
