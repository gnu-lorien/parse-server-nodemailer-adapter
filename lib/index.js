'use strict';

var _nodemailer = require('nodemailer');

var _nodemailer2 = _interopRequireDefault(_nodemailer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NodemailerAdapter = function NodemailerAdapter(mailOptions) {
    if (!mailOptions || !mailOptions.transportURI || !mailOptions.fromAddress) {
        throw 'Nodemailer requires a fromAddress and transport URI';
    }
    var transporter = _nodemailer2.default.createTransport(mailOptions.transportURI);

    var sendMail = function sendMail(_ref) {
        var to = _ref.to;
        var subject = _ref.subject;
        var text = _ref.text;

        return new Promise(function (resolve, reject) {
            transporter.sendMail({
                from: mailOptions.fromAddress,
                to: to,
                subject: subject,
                text: text
            }, function (err, json) {
                if (err) {
                    reject(err);
                }
                resolve(json);
            });
        });
    };

    return Object.freeze({
        sendMail: sendMail
    });
};

module.exports = NodemailerAdapter;