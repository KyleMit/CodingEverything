---
title: Using Signed Macros with MS Office
tags: [post, Excel, MS-Office, VBA, Cert, Macros]
date: 2015-08-31
postID: 8399300606723200840
---

Signing excel apps via a digital certificate can help guarantee that no one has tampered with the code and that what you are executing is what was originally written by the original signer.  Further, it helps lock down your security policy.  By only running signed code and only importing certificates from people you trust, you can prevent a situation where an an excel document can hijack your whole computer ([because it can][SO1])

If you rely on VBA solutions within your organization, make sure you sign and then import certificates for *all* projects.

### Sign with Certificate

When creating a VBA project that uses Macros, you can easily [sign the project][sign article] with a self signed certificate using the following steps:

1. If you don't already have one, you'll need to create a self-signed certificate on your computer.  If you do have one, you can skip to [step 3](#sign-3).  If not, go to the Start Menu > All Programs > Microsoft Office > Microsoft Office Tools > and open **Digital Certificate for VBA Projects**
   * ![1][Sign - 1]
2. Enter a name for your certificate and Click OK
   * ![2][Sign - 2]
3. <span id="sign-3">Open</span> up your VBA project in Excel, Word, Outlook (etc) and hit <kbd>Alt</kbd> + <kbd>F11</kbd> to open up the VBA Project and go to Tools > Digital Signature
   * ![3][Sign - 3]
4. On the Digital Signature Menu, Click "Choose"
   * ![4][Sign - 4]
5. You should see the Certificate we just created.  Select that and hit OK
   * ![5][Sign - 5]

### Import Certificate From Someone Else

When the file is opened on another machine, it won't recognize the original certificate which only exists on the original author's machine.  Using the following steps we can [import the certificate on the client's machine][import article].

> **Disclaimer**: You should *only* perform these steps when you are absolutely certain that the file has originated from someone you trust to execute any commands on your machine without your knowledge.

1. Open the Excel File with Macros and click "Options"
   * ![1][Import - 1]
2. Click "Show Signature Details"
   * ![2][Import - 2]
3. Click "View Certificate"
   * ![3][Import - 3]
4. Click "Install Certificate"
   * ![4][Import - 4]
5. Install Wizard Will Open
   * ![5][Import - 5]
6. Select "Place all certificates in the following store" and Click "Browse"
   * ![6][Import - 6]
7. Select “Trusted Root Certification Authorities”
   * ![7][Import - 7]
8. Click OK / Next several times
   * ![8][Import - 8]
9. Accept the Security Warning to Install the Certificate
   * ![9][Import - 9]
10. On the original Dialog, Select “Trust all documents from this publisher” and Click OK
    * ![10][Import - 10]


### Manage Certificates

If you want to go in and [make changes to your certificates directly][manage article], you can view and edit all of the certs on your current system with the following steps.

1. Hit <kbd>Win</kbd> +  <kbd>R</kbd> to open up the Run Dialog
2. Type "certmgr.msc" and Click OK
   * ![1][Manage - 1]
3. You should see the certificate we added in the Personal/Certificates folder
   * ![2][Manage - 2]

[**Alternatively**][mmc]: You can also load your Computer's Management Console by going to Start > Run mmc and then going to File > Add Snap In and then selecting Certificates.

And that's it!  Adding certificates to your projects is a great way to keep security in mind while providing some sort of automation within Office and other products.



[Sign - Album]: http://imgur.com/a/v81Ay
[Sign - 1]: https://i.imgur.com/nRNSLfd.png
[Sign - 2]: https://i.imgur.com/EOYyY5k.png
[Sign - 3]: https://i.imgur.com/0oH1DyD.png
[Sign - 4]: https://i.imgur.com/MlQBet2.png
[Sign - 5]: https://i.imgur.com/fgXW6iL.png

[Import - Album]: http://imgur.com/a/uIiNP
[Import - 1]: https://i.imgur.com/3geFEuw.png
[Import - 2]: https://i.imgur.com/4VoNak1.png
[Import - 3]: https://i.imgur.com/1F8gRFH.png
[Import - 4]: https://i.imgur.com/rdvbMHw.png
[Import - 5]: https://i.imgur.com/TYHxYkz.png
[Import - 6]: https://i.imgur.com/J7cT2HW.png
[Import - 7]: https://i.imgur.com/Y1EJ58x.png
[Import - 8]: https://i.imgur.com/DEQiT8Y.png
[Import - 9]: https://i.imgur.com/6CoGgsR.png
[Import - 10]: https://i.imgur.com/ddjhxHp.png

[Manage - Album]: http://imgur.com/a/mgzWw
[Manage - 1]: https://i.imgur.com/ieyHaOL.png
[Manage - 2]: https://i.imgur.com/nxwZYwF.png

[SO1]: http://security.stackexchange.com/a/98226/24374
[sign article]: https://support.office.com/en-za/article/Digitally-sign-your-macro-project-956e9cc8-bbf6-4365-8bfa-98505ecd1c01
[import article]: http://domainwebcenter.com/?p=868
[manage article]: http://www.wiseowl.co.uk/blog/s241/deleting_digital_certificates.htm
[mmc]: http://answers.microsoft.com/en-us/office/forum/office_2010-excel/how-to-delete-self-signed-digital-certificate/b9dc7fa9-362e-4c6c-8c73-879236b62ae9?auth=1#ThreadAnswers
