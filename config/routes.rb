Rails.application.routes.draw do
  devise_for :admins, :controllers => {:registrations => "admin_registrations"}
  devise_for :users, :controllers => {:registrations => "user_registrations"}
  scope "/adminviews" do
  	resources :users
  end
  scope "/superadminviews" do
    resources :admins
  end
  root to: "pages#home"
  get 'hello' => 'users#hello'
  resources :admins do
  	get 'passwordchange'
  end
  resources :adminviews do
  end
  resources :superadminviews do
  end
  get 'adminviews/:id/suspend', to: 'adminviews#suspend'
  get 'superadminviews/:id/suspend', to: 'superadminviews#suspend'
end



  
# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

