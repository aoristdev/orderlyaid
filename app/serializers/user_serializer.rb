class UserSerializer < ActiveModel::Serializer
  attributes :token, :active, :email, :phone, :display_name,
             :prescriptions,
             :created_at, :updated_at
end
