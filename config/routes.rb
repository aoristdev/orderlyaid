Rails.application.routes.draw do

  scope '/api' do
    resources :users, except: [:index]
    post '/users/authentication', to: 'users#authenticate'
  end

  ## Sara's routes
  # Profile
  # SignUp
  # SignIn
  # OnBoarding

  # rails generate resource Prescription

  # root to: redirect(
  #   Rails.env.production? ? 'https://.../' : 'http://localhost:8000/'
  # )

end
