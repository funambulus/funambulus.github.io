
import emailjs from 'emailjs-com';

// const sender = {
//     service: 'gmail',
//     auth: {
//         user: 'developeravicia@gmail.com',
//         pass: process.env.REACT_APP_PASSWORD,
//         service_id: process.env.REACT_APP_SERVICEID,
//         template_id: process.env.REACT_APP_SERVICEID,
//     }
// }
export default function sendNodeMail(fromName, fromEmail, phone, message) {
    var params = {
        fromName: fromName,
        fromEmail: fromEmail,
        toname: 'Savi',
        name: fromName,
        email: fromEmail,
        phone: phone,
        message: message,
        contact_number: 'Check this out!',
        replyTo: fromEmail
    };

    // console.log('Message sent', '\n' + fromName);
    // console.log(fromEmail);
    // console.log(message);
    // console.log(sender.service_id);
    // console.log(sender.template_id);
    // emailjs.send(sender.service_id, sender.template_id, params)
    emailjs.send('service_al1o25n', 'template_jmmjhty', params)
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function (error) {
            console.log('FAILED...', error);
        })
}