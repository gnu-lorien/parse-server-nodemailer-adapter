import nodemailer from 'nodemailer';

let NodemailerAdapter = mailOptions => {
    if (!mailOptions || !mailOptions.transportURI || !mailOptions.fromAddress) {
        throw 'Nodemailer requires a fromAddress and transport URI';
    }
    let transporter = nodemailer.createTransport(mailOptions.transportURI);

    let sendMail = ({to, subject, text}) => {
        return new Promise((resolve, reject) => {
                transporter.sendMail({
                    from: mailOptions.fromAddress,
                    to: to,
                    subject: subject,
                    text: text,
                }, function (err, json) {
                    if (err) {
                        reject(err);
                    }
                    resolve(json);
                });
            });
    }

    return Object.freeze({
        sendMail: sendMail
    });
}

module.exports = NodemailerAdapter