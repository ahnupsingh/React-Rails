class AppointmentsController < ApplicationController
  def index
    @appointments = Appointment.order('apt_time ASC')
    @appointment = Appointment.new
  end

  def create
    @appointment = Appointment.create(appointment_params)
    @appointments = Appointment.order('appt_time ASC')
    redirect_to :root
  end

  private
  def appointment_params
    params.require(:appointment).permit(:title, :apt_time)
  end
end
