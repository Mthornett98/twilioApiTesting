// Download the helper library from https://www.twilio.com/docs/node/install
const twilio = require("twilio"); // Or, for ESM: import twilio from "twilio";

// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

console.log('Account Sid:', process.env.TWILIO_ACCOUNT_SID);
console.log('Auth Token:', process.env.TWILIO_AUTH_TOKEN);


async function listMessage() {
  const messages = await client.messages.list({ limit: 20 });

  messages.forEach((m) => console.log(m.body));
}

listMessage();