Rails.application.routes.draw do
  get 'appointments/index'
  root 'appointments#index'
  resources :appointments
end
