class UserSerializer < ActiveModel::Serializer
  attributes :token, :username, :email, :phone, :forename, :surname, :avatar, :patient_name, :patient_avatar, :active, :prescriptions, :patient_dob, :patient_gender
end
