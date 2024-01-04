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
