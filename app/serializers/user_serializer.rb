class UserSerializer < ActiveModel::Serializer
  attributes :id, :token, :username, :email, :phone, :forename, :surname, :patient_name
end
