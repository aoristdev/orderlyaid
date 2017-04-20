class ReminderMailer < ApplicationMailer

  def administer(recipient, body)
    generic(recipient, "Time to take your #{reminder.prescription.name}", body)
  end

  def refill(recipient, body)
    generic(recipient, "Time to refill your #{reminder.prescription.name}", body)
  end

  private

  def generic(recipient, subject, body)
    @user = recipient
    mail(to: @user.email,
         subject: subject,
         body:    body)
  end

end
