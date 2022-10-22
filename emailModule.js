import * as MailComposer from 'expo-mail-composer';

// run: expo install expo-mail-composer
sendMessageWithEmail = async () => {
        const isAvailable = await MailComposer.isAvailableAsync();

        if (isAvailable) {
            var options = {
                // recipients (array) -- An array of e-mail addressess of the recipients.
                recipients: ['leehoang2311@gmail.com'],
                // ccRecipients (array) -- An array of e-mail addressess of the CC recipients.
                // bccRecipients (array) -- An array of e-mail addressess of the BCC recipients.
                // subject (string) -- Subject of the mail.
                subject: 'My Subject Line',
                // body (string) -- Body of the mail.
                body: message,
                // isHtml (boolean) -- Whether the body contains HTML tags so it could be formatted properly. Not working perfectly on Android.
                // attachments (array) -- An array of app's internal file uris to attach.
            };

            MailComposer.composeAsync(options).then((result) => {
                console.log(result.status);
            });
        } else {
            console.log('Email is not available on this device');
        }
    };