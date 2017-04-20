class UserSerializer < ActiveModel::Serializer
  attributes :token, :active, :username, :email, :phone, :forename, :surname, :avatar,
             :patient_name, :patient_avatar, :patient_dob, :patient_gender,
             :prescriptions,
             :created_at, :updated_at
end
