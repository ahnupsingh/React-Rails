class Appointments extends React.Component {
	render() {
		return (
			<div>
			<AppointmentForm/>
			<AppointmentList appointments={this.props.appointments}/>
			</div>
		)
	}
}
