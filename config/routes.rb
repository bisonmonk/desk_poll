Rails.application.routes.draw do
  root to: "static_pages#root"
  
  resources :votes
  
  resource :session, only: [:new, :create, :destroy]
  resources :users, only: [:new, :create, :destroy]
end
