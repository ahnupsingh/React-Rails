Rails.application.routes.draw do
  get 'appointments/index'
  root 'appointments#index'
  resource :appointments
end
