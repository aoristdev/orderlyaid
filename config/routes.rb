Rails.application.routes.draw do

  resources :prescriptions
  scope '/users' do
    post  '/create',         to: 'users#create'
    post  '/authenticate',   to: 'users#authenticate'
    post  '/profile',        to: 'users#show'
    patch '/update',         to: 'users#update'
    post  '/delete',         to: 'users#destroy'
  end

  root to: redirect('http://localhost:3000/')

  ## Sara's routes
  # Profile
  # SignUp
  # SignIn
  # OnBoarding

  # root to: redirect(
  #   Rails.env.production? ? 'https://.../' : 'http://localhost:8000/'
  # )

  #TODO customize routes for Prescriptions
  #TODO validations!!

end
