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
    mail(to: @user.email,
         subject: subject,
         body:    body)
  end

end
