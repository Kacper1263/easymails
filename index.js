const nodemailer = require('nodemailer')

/**
 * Send emails faster. Based on nodemailer
 */
class EasyMail{
    /**
     * Send emails faster. Based on nodemailer
     * @param {String} service E.g. "gmail". If you want to provide custom host and port, set it to "custom"
     * @param {String} user Login to service
     * @param {String} password Password to service
     * @param {String} host OPTIONAL - SMTP host
     * @param {Number} port OPTIONAL - SMTP port
     */
    constructor(service, user, password, host, port){
        this.service = service
        this.user = user
        this.password = password
        this.host = host
        this.port = port

        try{
            //Custom service
            if(service.toLowerCase() == "custom"){
                if(!host || !port) {
                    console.error("Easymails error: Host and Port is required in custom service! You must create new Easymail with Host and Port when you want to use custom service!")
                    process.exit()
                } 

                this.transporter = nodemailer.createTransport({
                    host: host,
                    port: port,
                    auth: {
                        user: this.user,
                        pass: this.password
                    }
                })
            }
            else{   //Known service
                this.transporter = nodemailer.createTransport({
                    service: this.service,
                    auth: {
                        user: this.user,
                        pass: this.password
                    }
                })
            }  
        }catch(e){
            console.log("Error while creating transporter: " + e)
        }
              
    }
    /**
     * @returns If success - nothing, if error - error
     * @param {String} receiver Email receiver
     * @param {String} subject Subject of email
     * @param {String} html Body of email (plain text or HTML)
     */
    sendMail(receiver, subject, html){
        try{
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
        }catch(e){
            console.log("Error while sending email: " + e)
        }
    }
}

module.exports = EasyMail