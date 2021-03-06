class PartiesController < ApplicationController
    def index
		render json: Party.all
	end

	def show
		render json: Party.find(params[:id])
	end

	def mine
		render json: Party.where(user: current_user)
	end

	def create
		party = Party.new(party_params.merge(user: current_user))
	   	if party.save 
	  	    render json: party
	  	else
	        render json: party.errors, status: :unprocessable_entity
		end
	end

	private
    
    def party_params
		params.require(:party).permit(
			:name , 
			:date, 
			:city, 
			:place, 
			:boardgames, 
			:description, 
			:max_participant,
			:time)
	end	
  
end
