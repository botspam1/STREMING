const Discord = require("discord.js");
const MooDY = new Discord.Client();
MooDY.on('ready', () => {
  MooDY.user.setGame(`عندي شغل لحد يكلمني`,'https://www.twitch.tv/iiMooDY9');
  console.log("["+MooDY.user.username+"] Online now !!");
});
MooDY.login("NDU1MDY1MjE3OTAzMzYyMDQ5.XL38fQ.RbwtQ-MgWcn367Jd55DfuskR29E"); // <= Your token here !!