class Appointments extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
			appointments: this.props.appointments,
			input_title: "",
			input_apt_time: "Tomorrow at 9pm"
    }
  }

	handleUserInput(obj){
		this.setState(obj);
	}

	addNewAppointment(appointment){
		var appointments = this.state.appointments;
		appointments.push(appointment);
		this.setState({appointments: appointments
			.sort(function(a,b){
				return new Date(a.apt_time) - new Date(b.apt_time);
		})});
	}

	handleFormSubmit(){
		var appt = {title: this.state.input_title, apt_time: this.state.input_apt_time}
		$.post('/appointments', {"appointment": appt})
			.done(function(data){
				this.addNewAppointment(data);
		}.bind(this));
	}

	render() {
		return (
			<div>
			<AppointmentForm input_title={this.state.input_title} input_apt_time={this.state.input_apt_time} onUserInput={(obj) => this.handleUserInput(obj)} onFormSubmit={() => this.handleFormSubmit() }/>
			<AppointmentList appointments={this.props.appointments}/>
			</div>
		)
	}
}
