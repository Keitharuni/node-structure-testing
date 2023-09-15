const AWS = require('aws-sdk');

exports.sendEmail = ({ email, body, subject }) => {
  const ses = new AWS.SES({
    region: 'us-east-1'
  });
  ses.sendEmail({
    Destination: {
      ToAddresses: [`${email}`],
    },
    Message: {
      Subject: {
        Data: subject
      },
      Body: body
    }
  })
}