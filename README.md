# parse-server-nodemailer-adapter
Nodemailer email adapter for parse server

## Configuration

```
var server = ParseServer({
  ...otherOptions,
  // Enable email verification
  verifyUserEmails: true,
  // The public URL of your app.
  // This will appear in the link that is used to verify email addresses and reset passwords.
  // Set the mount path as it is in serverURL
  publicServerURL: 'https://example.com/parse',
  // Your apps name. This will appear in the subject and body of the emails that are sent.
  appName: 'Parse App',
  // The email adapter
  emailAdapter: {
    module: 'parse-server-nodemailer-adapter',
    options: {
      // The address that your emails come from
      fromAddress: 'parse@example.com',
      // Transport URI to configure nodemailer
      transportURI: 'smtps://user%40gmail.com:pass@smtp.gmail.com'
    }
  }
});

```
