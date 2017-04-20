Rails.application.routes.draw do

  root 'application#static'

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

  get '/reminders/all',     to: 'reminders#index'
  get '/reminders/history', to: 'reminders#history'
  get '/reminder',          to: 'users#show'

  get '/:param1(/:param2)(/:param3)' => 'application#static'

end
