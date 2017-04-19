Rails.application.routes.draw do


  scope '/users' do
    post   '/create',       to: 'users#create'
    post   '/authenticate', to: 'users#authenticate'
    get    '/profile',      to: 'users#show'
    patch  '/update',       to: 'users#update'
    delete '/delete',       to: 'users#destroy'
  end

  scope '/rx' do
    get    '/all',    to: 'prescriptions#index'
    post   '/create', to: 'prescriptions#create'
    get    '/show',   to: 'prescriptions#show'
    patch  '/update', to: 'prescriptions#update'
    delete '/delete', to: 'prescriptions#destroy'
  end

  # scope '/reminders' do
  #   get '/all', to: 'reminders#index'
  # end

  root to: redirect('http://localhost:3000/')

  # root to: redirect(
  #   Rails.env.production? ? 'https://.../' : 'http://localhost:8000/'
  # )

end
