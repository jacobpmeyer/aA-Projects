Rails.application.routes.draw do
  namespace :api do 
    resources :todos, defaults: {format: :json}, except: [:edit, :new]
  end
  root to: "static_pages#root"
end
