Rails.application.routes.draw do
  get 'home/index'
  root 'home#index'

  scope :api do
    resources :recipes, only: [:index, :update]
  end
end
