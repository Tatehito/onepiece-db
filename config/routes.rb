Rails.application.routes.draw do
  namespace :api, format: 'json' do
    namespace :v1 do
      resources :characters
    end
  end
end
