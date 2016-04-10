class UserSerializer < ActiveModel::Serializer
  attributes :id,
		   :pseudo, 
		   :mail, 
		   :age, 
		   :gender, 
		   :address, 
		   :zipcode, 
		   :city, 
		   :description, 
		   :game
end

