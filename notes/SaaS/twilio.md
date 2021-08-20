# Twilio

[Twilio](https://www.twilio.com/)

> Communication APIs for SMS, Voice, Video and Authentication

## Send Grid

[SendGrid](https://sendgrid.com/) - Email Delivery Service

> Partner with the email service trusted by developers and marketers for time-savings, scalability, and delivery expertise.

### Alternatives

* MailGun
* Constant Contact
* Amazon SES (Simple Email Service)
* MailJet


### Docs

* [SendGrid Suppressions Overview](https://docs.sendgrid.com/ui/sending-email/index-suppressions)
  * [Unsubscribe Groups](https://docs.sendgrid.com/ui/sending-email/unsubscribe-groups#overview)
    * [Create and Manage Unsubscribe Groups](https://docs.sendgrid.com/ui/sending-email/create-and-manage-unsubscribe-groups)


### Suppressions

* **Blocks** - The recipient's email server rejects the message for a reason related to the message, not the recipient address. This may be due to your Sending IP, or the message content. Since these are message-specific issues, future messages to these addresses are not suppressed.
* **Bounces** - The recipient’s email server rejects the message, or sends the message back to SendGrid, due to an issue with the recipient address.
* **Invalid Emails** - The recipient address does not exist at the mail server you sent to.
* **Spam Reports** - The recipient marks your email as spam.
* **Global Unsubscribes** - When a user unsubscribes from everything you might email them.
* **Group Unsubscribes** - When a user unsubscribes from a specific group of your emails.

