module Api::V1
  class TrainsController < ApplicationController

    before_action :find_train, only: [:update, :show, :edit, :destroy]
  
    def new
    end
  
    def create
      @train=Train.create(train_params)
      if @train.save
        render json: { message: "Train successfully created.", success: true, data: @train }, status: 200
      else
        render json: { message: "Train not successfully created.", success:false, data: @train.errors }, status: 406
      end
    end

    def edit
      
    end
  
    def update
      @train.update(train_params)
      if @train.save
        render json: { message: "Train successfully updated.", success: true, data: @train }, status: 200
      else
        render json: { message: "Train not successfully updated.", success:false, data: @train.errors }, status: 406
      end
    end

    def index
      @trains = Train.all
      render json: { message: "Trains successfully returned.", success: true, data: @trains }, status: 200
    end
  
    def show
      render json: { message: "Train successfully returned.", success: true, data: @train }, status: 200
    end
  
    def destroy
      find_train 
      if @train.destroy
        render json: { message: "Train successfully deleted.", success: true, data: @train }, status: 200
      else
        render json: { message: "Train not successfully deleted.", success:false, data: @train.errors }, status: 406
      end
    end

    def amtrak_station
      response = Faraday.get("http://dixielandsoftware.net/Amtrak/solari/data/#{params[:id]}_schedule.php?data=#{params[:id]}") 
      body = JSON.parse(response.body)
      if response.success? 
        @trains = body["response"]
        render json: {message: "Amtrak info found.", success: true, data: @trains}, status: 200
      else 
        render json: {message: "Amtrak info not found.", success:false, data: @train.errors }, status: 406
      end
    end

    def amtrak_station_search
      response = Faraday.get("http://www.dixielandsoftware.net/cgi-bin/station_search.pl?data=#{params[:id]}") 
      if response.success? 
        @stations = response.body
        # render json: {message: "Amtrak info found.", success: true, data: @stations }, status: 200
        render plain: @stations
      else 
        render json: {message: "Amtrak info not found.", success:false, data: @stations.errors }, status: 406
      end
    end
  
    private
  
    def train_params
      params.require(:train).permit(:destination, :newtime, :newtime24, :origin, :remarks_boarding, :scheduled, :scheduled24, :service, :trainno)
    end
  
    def find_train
      @train=Train.find(params[:id])
    end
    
  end
end
  