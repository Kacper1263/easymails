const nodemailer = require('nodemailer')

/**
 * Send emails faster. Based on nodemailer
 */
class EasyMail{
    /**
     * Send emails faster. Based on nodemailer
     * @param {String} service E.g. "gmail"
     * @param {String} user Login to service
     * @param {String} password Password to service
     */
    constructor(service, user, password){
        this.service = service
        this.user = user
        this.password = password

        this.transporter = nodemailer.createTransport({
            service: this.service,
            auth: {
                user: this.user,
                pass: this.password
            }
        })
    }
    /**
     * @returns If success - nothing, if error - error
     * @param {String} receiver Email receiver
     * @param {String} subject Subject of email
     * @param {String} html Body of email (plain text or HTML)
     */
    sendMail(receiver, subject, html){
        this.mailOptions = {
            from: this.user, // sender address
            to: receiver, // list of receivers
            subject: subject, // Subject line
            html: html
        }

        this.transporter.sendMail(this.mailOptions, function(err, info){
            if(err){
                return err
            }
            else{
                return
            }
        })
    }
}

module.exports = EasyMail