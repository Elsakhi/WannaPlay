class PartySerializer < ActiveModel::Serializer
  attributes :id,
		   :name, 
		   :date, 
		   :city, 
		   :place, 
		   :bordgames, 
		   :description, 
		   :max_participant
end