class PartiesController < ApplicationController
  def index
		render json: Party.all
	end
end
