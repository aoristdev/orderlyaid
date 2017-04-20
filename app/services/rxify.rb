class Rxify

  def self.call(params, user)
    if params[:prescriptions_attributes]
      params[:prescriptions_attributes]&.map do |_, rx|
        rx = rx.to_h
        rx[:last_taken] =     Time.parse(rx[:last_taken])         if rx[:last_taken]
        rx[:interval]   = Hour::Hour.new(rx[:interval]).to_time   if rx[:interval]
        rx[:start_time] = Hour::Hour.new(rx[:start_time]).to_time if rx[:start_time]
        rx[:end_time]   = Hour::Hour.new(rx[:end_time]).to_time   if rx[:end_time]
        Prescription.new(rx)
      end || []
    else
      params[:user] = user
      Prescription.new(params)
    end
  end

end
