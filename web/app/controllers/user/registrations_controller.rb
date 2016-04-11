class User::RegistrationsController < Devise::RegistrationsController
  respond_to :json, :html

  before_filter :configure_permitted_parameters

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.for(:sign_up).push(
    	:pseudo, 
    	:address, 
    	:zipcode, 
    	:city, 
    	:age, 
    	:gender, 
    	:description, 
    	:game)
  end
end
