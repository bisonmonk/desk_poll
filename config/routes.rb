Rails.application.routes.draw do
  root to: "static_pages#root"
  
  get "votes/current_vote", to: "votes#current_vote"
  
  resources :votes, only: [:new, :create, :update, :edit, :index, :show]
  
  resource :session, only: [:new, :create, :destroy]
  resources :users, only: [:new, :create, :destroy]
  
  get "users/current_voter", to: "users#current_voter"
  
end
