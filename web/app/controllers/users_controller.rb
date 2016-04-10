class UsersController < ApplicationController
  def index
    render json: [User.new(email: 'toto@yoyo.com')]
  end
end
