Rails.application.routes.draw do

  # Prefix        Verb   URI Pattern                   Controller#Action
  # prescriptions GET    /prescriptions(.:format)      prescriptions#index
  #               POST   /prescriptions(.:format)      prescriptions#create
  #  prescription GET    /prescriptions/:id(.:format)  prescriptions#show
  #               PATCH  /prescriptions/:id(.:format)  prescriptions#update
  #               PUT    /prescriptions/:id(.:format)  prescriptions#update
  #               DELETE /prescriptions/:id(.:format)  prescriptions#destroy

  scope '/users' do
    post  '/create',         to: 'users#create'
    post  '/authenticate',   to: 'users#authenticate'
    post  '/profile',        to: 'users#show'
    patch '/update',         to: 'users#update'
    post  '/delete',         to: 'users#destroy'
  end

  scope '/rx' do
    post  '/create', to: 'prescriptions#create'
    post  '/show',   to: 'prescriptions#show'
    patch '/update', to: 'prescriptions#update'
    post  '/delete', to: 'prescriptions#destroy'
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

  #TODO validations!!

end
