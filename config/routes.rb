Rails.application.routes.draw do

  scope '/api' do
    resources :users
  end

  # root to: redirect(
  #   Rails.env.production? ? 'https://.../' : 'http://localhost:8000/'
  # )

end
