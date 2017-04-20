class UserMailer < ApplicationMailer

  def signup(recipient)
    @user = recipient
    mail(to: @user.email,
         subject: 'You\'ve signed up for OrderlyAid!')
  end

end
