const MessagingResponse = require("twilio").twiml.MessagingResponse;

const response = new MessagingResponse();
const message = response.message();
message.body("TwilioQuest rules");
response.redirect("https://demo.twilio.com/welcome/sms/");

console.log(response.toString());
