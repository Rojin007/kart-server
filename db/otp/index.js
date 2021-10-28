const unirest = require("unirest");
const crypto = require("crypto");

const sendOtp = async(mobileNumber) =>{
  console.log(mobileNumber)
    const otp = crypto.randomInt(1000,9999);
    const req = unirest("POST", "https://www.fast2sms.com/dev/bulkV2");
    req.headers({
    "authorization":""
    });
    req.form({
    "variables_values": otp+"",
    "route": "otp",
    "numbers": mobileNumber,
    });

    const res = await req.end();
    console.log(res)
    if (res.error) {
        throw new Error(res.error);
    }
    return {status: true, otp };
}

module.exports = {
    sendOtp
}