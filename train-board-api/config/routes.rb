Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :trains  
      get '/amtrak-station/:id', to: "trains#amtrak_station"
      get '/amtrak-station-search/:id', to: "trains#amtrak_station_search"
    end
  end
end
