module Api::V1
class TrainsController < ApplicationController

    before_action :find_train, only: [:update, :show, :edit, :destroy]
  
    def index
      @trains = Train.all
      render json: {data: @trains, message: "Trains successfully returned.", success: true}, status: 200
    end
  
    def show
      render json: {data: @train, message: "Train successfully returned.", success: true}, status: 200
    end
  
    def new
    end
  
    def create
      @train=Train.create(train_params)
      if @train.save
        render json: {data: @train, message: "Train successfully created.", success: true}, status: 200
      else
        render json: {data: @train.errors, message: "Train not successfully created.", success:false}, status: 406
      end
    end
  
    def edit
      binding.pry
      render json: @train
    end
  
    def update
      binding.pry
      @train.update(train_params)
      if @train.save
        render json: {data: @train, message: "Train successfully created.", success: true}, status: 200
      else
        render json: {data: @train.errors, message: "Train not successfully created.", success:false}, status: 406
      end
    end
  
    def destroy
      find_train 
      @train.destroy
      if @train.destroy
        render json: {data: @train, message: "Train successfully deleted.", success: true}, status: 200
      else
        render json: {data: @train.errors, message: "Train not successfully deleted.", success:false}, status: 406
      end
    end

    def amtrak_station
      response = Faraday.get("http://dixielandsoftware.net/Amtrak/solari/data/#{params[:id]}_schedule.php?data=#{params[:id]}") 
      body = JSON.parse(response.body)
      if response.success? 
        @trains = body["response"]
        render json: {data: @trains, message: "Amtrak info found", success: true}, status: 200
      else 
        render json: {data: @train.errors, message: "Amtrak info not found.", success:false}, status: 406
      end
    end

    def amtrak_search
      response = Faraday.get("http://www.dixielandsoftware.net/cgi-bin/station_search.pl?data=#{params[:id]}") 
      body = JSON.parse(response.body)
      if result.success? 
        @trains = body["response"]
        render json: {data: @trains, message: "Amtrak info found", success: true}, status: 200
      else 
        render json: {data: @train.errors, message: "Amtrak info not found.", success:false}, status: 406
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
  