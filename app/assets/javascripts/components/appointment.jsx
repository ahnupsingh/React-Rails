class Appointment extends React.Component {
	render() {
		return (
      <div>
        <h3>{this.props.appointment.title}</h3>
        <p>{this.props.appointment.apt_time}</p>
      </div>
		)
	}
}
