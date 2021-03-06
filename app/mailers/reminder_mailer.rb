class ReminderMailer < ApplicationMailer

  def administer(recipient, rx, message)
    generic(recipient, "Time to take your #{rx.name}!", message)
  end

  def refill(recipient, rx, message)
    generic(recipient, "Time to refill your #{rx.name}!", message)
  end

  private

  def generic(recipient, subject, body)
    @user = recipient
    @body = message
    mail(to: @user.email,
         subject: subject)
  end

end
