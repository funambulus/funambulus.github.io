import emailjs from "emailjs-com";

export default function sendNodeMail(fromName, fromEmail, phone, message) {
  var params = {
    fromName: fromName,
    fromEmail: fromEmail,
    toname: "Savi",
    name: fromName,
    email: fromEmail,
    phone: phone,
    message: message,
    contact_number: "Check this out!",
    replyTo: fromEmail,
  };

  // console.log('Message sent', '\n' + fromName);
  // console.log(fromEmail);
  // console.log(message);
  // console.log(sender.service_id);
  // console.log(sender.template_id);
  emailjs.send("service_al1o25n", "template_jmmjhty", params).then(
    function (response) {
      console.log("SUCCESS!", response.status, response.text);
    },
    function (error) {
      console.log("FAILED...", error);
    }
  );
}
