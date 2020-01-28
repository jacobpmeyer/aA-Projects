Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resource :session, only: [:new, :create, :destroy]
  resources :users, only: [:create, :new, :show]
  resources :bands do
    resources :albums, only: [:index, :new]
  end
  resources :albums, only: [:create, :update, :show, :destroy, :edit]
end
