---
title: Send Reminder Outlook Add-in
tags: ['post', outlook]
draft: true
---

### Installation

After you run the installation package, the next time you open outlook it will confirm that you want to install.

![Outlook Install](https://i.imgur.com/6IqlNAb.png)

### Functionality

The Outlook Add-In begins working when you hit the Send Button on an Email.  It currently offers two different features:

#### Disable Reply All Warning When Large Number of Recipients

If you are sending an email to a large number of users (past a configurable threshold, defaulted to 10), it will allow you to optionally disable the **Reply All** functionality for all recipients.

![Confirm Multiple Recipients](https://i.imgur.com/mRCZ0QK.png)

* **Yes** - Sends Message And Disables Reply All
* **No** - Sends Message and leaves option for Reply All
* **Cancel** - Cancels sending the message, allowing you to make any necessary changes.

#### Attachment Warning

If you have used any number of a configurable set of words (defaulted to "Attach" and "I've included") within the body of your message, but have not included an attachment, the application will confirm you want to proceed and allow you to cancel sending the email.

![Confirm Attachment](https://i.imgur.com/ZeCGQO8.png)

* **Yes** - Continues with Sending Message
* **No** - Cancels Sending Message

### Change User Settings

In the top left of Outlook, click **File**, and then select **Options**

![File > Options](https://i.imgur.com/xBAmufc.png)

From the Left Options Pane, select **Add-Ins**.  Select the **Send Reminder** add-in from the list and Click the **Add-in Options** button at the top or click <kbd>Alt</kdb> + <kbd>O</kbd>

![Add In Options](https://i.imgur.com/8cto0lq.png)

By default, both the Reply All Warning and the Attachment Warning are enabled.  Both can be turned off by deselecting the option.  You can configure the threshold for number of people and specify a comma separated list of words to use in an attachment.

![Send Reminder Options](https://i.imgur.com/ZeYYoX6.png)
