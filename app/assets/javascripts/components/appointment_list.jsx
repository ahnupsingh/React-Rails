class AppointmentList extends React.Component{
  render(){
    return(
      <div>
        {this.props.appointments.map(function(appointment){
          return(
            <Appointment appointment={appointment}/>
          )
        })}
      </div>
    )
  }
}
