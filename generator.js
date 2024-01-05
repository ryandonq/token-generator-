const httpx = require('httpx');
const { bypass } = require('hcapbypass');
const randomstring = require('randomstring');

function randomChar(length) {
  return randomstring.generate({
    length: length,
    charset: 'alphabetic'
  });
}

function register(serverinv) {
  const proxies = {
    "all://": "http://"
  };

  const username = randomChar(10);
  const email = randomChar(10) + "@" + randomChar(10) + ".com";
  const password = randomChar(10);

  // Getting cookies
  const header1 = {
    "Host": "discord.com",
    "Connection": "keep-alive",
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "Sec-Fetch-Site": "none",
    "Sec-Fetch-Mode": "navigate",
    "Sec-Fetch-User": "?1",
    "Sec-Fetch-Dest": "document",
    "sec-ch-ua": '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
    "sec-ch-ua-mobile": "?0",
    "Upgrade-Insecure-Requests": "1",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "en-us,en;q=0.9",
  };

  const getcookie = httpx.get("https://discord.com/register").headers['set-cookie'];
  const sep = getcookie.split(";");
  const sx = sep[0];
  const sx2 = sx.split("=");
  const dfc = sx2[1];
  const split = sep[6];
  const split2 = split.split(",");
  const split3 = split2[1];
  const split4 = split3.split("=");
  const sdc = split4[1];

  // Get Fingerprint
  const header2 = {
    "Host": "discord.com",
    "Connection": "keep-alive",
    "sec-ch-ua": '"Chromium";v="92", " Not A;Brand";v="99", "Microsoft Edge";v="92"',
    "X-Super-Properties": "eyJvcyI6Ik1hYyBPUyBYIiwiYnJvd3NlciI6IkNocm9tZSIsImRldmljZSI6IiIsInN5c3RlbV9sb2NhbGUiOiJlbi1VUyIsImJyb3dzZXJfdXNlcl9hZ2VudCI6Ik1vemlsbGEvNS4wIChNYWNpbnRvc2g7IEludGVsIE1hYyBPUyBYIDEwXzE1XzcpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS85Mi4wLjQ1MTUuMTMxIFNhZmFyaS81MzcuMzYiLCJicm93c2VyX3ZlcnNpb24iOiI5Mi4wLjQ1MTUuMTMxIiwib3NfdmVyc2lvbiI6IjEwLjE1LjciLCJyZWZlcnJlciI6IiIsInJlZmVycmluZ19kb21haW4iOiIiLCJyZWZlcnJlcl9jdXJyZW50IjoiIiwicmVmZXJyaW5nX2RvbWFpbl9jdXJyZW50IjoiIiwicmVsZWFzZV9jaGFubmVsIjoic3RhYmxlIiwiY2xpZW50X2J1aWxkX251bWJlciI6OTI3OTIsImNsaWVudF9ldmVudF9zb3VyY2UiOm51bGx9",
    "X-Context-Properties": "eyJsb2NhdGlvbiI6IlJlZ2lzdGVyIn0=",
    "Accept-Language": "en-US",
    "sec-ch-ua-mobile": "?0",
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36",
    "Authorization": "undefined",
    "Accept": "*/*",
    "Sec-Fetch-Site": "same-origin",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Dest": "empty",
    "Referer": "https://discord.com/register",
    "Accept-Encoding": "gzip, deflate, br"
  };

  const fingerprintres = httpx.get("https://discord.com/api/v9/experiments", { timeout: 10000 });

  let fingerprint = "";
  while (true) {
    if (fingerprintres.text !== "") {
      fingerprint = fingerprintres.json()['fingerprint'];
      break;
    }
  }

  // Handling Captcha
  const sitekey = "f5561ba9-8f1e-40ca-9b5b-a0b3f719ef34";

  let captchakey = "";
  while (true) {
    captchakey = bypass(sitekey, "discord.com", "");
    if (captchakey !== "False") {
      break;
    }
  }

  console.log("CAPTCHA KEY IS >>>>: ", captchakey);

  const header3 = {
    "Host": "discord.com",
    "Connection": "keep-alive",
    "sec-ch-ua": '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
    "X-Super-Properties": "eyJvcyI6Ik1hYyBPUyBYIiwiYnJvd3NlciI6IkNocm9tZSIsImRldmljZSI6IiIsInN5c3RlbV9sb2NhbGUiOiJlbi1VUyIsImJyb3dzZXJfdXNlcl9hZ2VudCI6Ik1vemlsbGEvNS4wIChNYWNpbnRvc2g7IEludGVsIE1hYyBPUyBYIDEwXzE1XzcpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS85Mi4wLjQ1MTUuMTMxIFNhZmFyaS81MzcuMzYiLCJicm93c2VyX3ZlcnNpb24iOiI5Mi4wLjQ1MTUuMTMxIiwib3NfdmVyc2lvbiI6IjEwLjE1LjciLCJyZWZlcnJlciI6IiIsInJlZmVycmluZ19kb21haW4iOiIiLCJyZWZlcnJlcl9jdXJyZW50IjoiIiwicmVmZXJyaW5nX2RvbWFpbl9jdXJyZW50IjoiIiwicmVsZWFzZV9jaGFubmVsIjoic3RhYmxlIiwiY2xpZW50X2J1aWxkX251bWJlciI6OTI3OTIsImNsaWVudF9ldmVudF9zb3VyY2UiOm51bGx9",
    "X-Fingerprint": fingerprint,
    "Accept-Language": "en-US",
    "sec-ch-ua-mobile": "?0",
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36",
    "Content-Type": "application/json",
    "Authorization": "undefined",
    "Accept": "*/*",
    "Origin": "https://discord.com",
    "Sec-Fetch-Site": "same-origin",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Dest": "empty",
    "Referer": "https://discord.com/register",
    "X-Debug-Options": "bugReporterEnabled",
    "Accept-Encoding": "gzip, deflate, br",
    "Cookie": `__dcfduid=${dfc}; __sdcfduid=${sdc}`
  };

  const payload = {
    "fingerprint": fingerprint,
    "email": email,
    "username": username,
    "password": password,
    "invite": serverinv,
    "consent": "true",
    "date_of_birth": "1991-04-06",
    "gift_code_sku_id": "",
    "captcha_key": captchakey
  };

  const registerreq = httpx.post("https://discord.com/api/v9/auth/register", { proxies, headers: header3, json: payload, timeout: 10000 });

  console.log("ACCOUNT REGISTERED");

  const token = registerreq.json()['token'];
  console.log("TOKEN IS >>>", token);
}

function manager() {
  const invitecode = "";
  register(invitecode);
}

function main() {
  const threads_to_start = parseInt(prompt("threads to use:"));

  for (let i = 0; i < threads_to_start; i++) {
    const t = new Thread(manager);
    t.start();
  }
}

main();
