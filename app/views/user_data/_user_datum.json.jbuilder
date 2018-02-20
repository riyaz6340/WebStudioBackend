json.extract! user_datum, :id, :email, :username, :encrypted_pass, :salt, :phone, :created_on, :created_at, :updated_at
json.url user_datum_url(user_datum, format: :json)
