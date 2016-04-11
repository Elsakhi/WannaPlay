class PartiesController < ApplicationController
    def index
		render json: Party.all
	end

	def mine
		render json: Party.where(user: current_user)
	end
end
