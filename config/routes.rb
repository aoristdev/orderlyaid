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

  scope  '/reminders' do
    get  '/archived',       to: 'reminders#archived'
    get  '/daily_schedule', to: 'reminders#daily_schedule'
    post '/state',          to: 'reminders#state'
  end

  get '/:param1(/:param2)(/:param3)' => 'application#static'

end
