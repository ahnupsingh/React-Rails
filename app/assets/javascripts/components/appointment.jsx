class Appointment extends React.Component {
	render() {
		return (
      <div class="appointment">
        <h3>{this.props.appointment.title}</h3>
        <p>{formatDate(this.props.appointment.apt_time)}</p>
      </div>
		)
	}
}
