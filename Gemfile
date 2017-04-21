source 'https://rubygems.org'
ruby '2.3.3'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

gem 'rails', '~> 5.0.2'
gem 'pg', '~> 0.18'
gem 'puma', '~> 3.0'
gem 'bcrypt', '~> 3.1.7'
gem 'active_model_serializers', '~> 0.10.0'
gem 'twilio-ruby', '~> 5.0.0.rc17'
gem 'rollbar'

gem 'faker', github: 'stympy/faker'
gem 'ffaker', github: 'ffaker/ffaker'

gem 'hour' #, github: 'davegregg/hour', branch: 'dev'

group :development, :test do
  gem 'figaro'
  gem 'rack-cors'
  gem 'brakeman'
  gem 'guard-brakeman'
  gem 'pry-rails'
  gem 'pry-byebug'
  gem 'minitest-rails'
  gem 'factory_girl_rails', '~> 4.5'
end

group :development do
  gem 'listen', '~> 3.0.5'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end
