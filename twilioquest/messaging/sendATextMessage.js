require("dotenv").config({ path: "../../.env" });

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

client.messages
  .create({ from: "+13149382520", body: "body", to: "+13027257784" })
  .then((message) => console.log(message.sid));

// console.log(accountSid);
