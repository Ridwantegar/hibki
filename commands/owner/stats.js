//made by NISHANT TOOK FROM DEVIL BOT INVITE HIM
const { MessageEmbed } = require("discord.js");
module.exports = {
name: "ainfo",
description: "`Show detailed stats of bot`",
category: "owner",
aliases: ["ostats"],
run: async (client, message, args, level) => {
//command
  if(message.author.id != 607501643096784905){
    const noperms = new MessageEmbed()
    .setDescription("<:emoji_209:922153644160348211> This Command Only Use By My Owner My Owner ! The Crazy")
    .setColor("YELLOW");
    return message.channel.send(noperms)
  } 

let servers_count = message.client.guilds.cache.size;
var myarray = [];
message.client.guilds.cache.keyArray().forEach(async function(item, index) {

let guildMember = message.client.guilds.cache.get(item).memberCount;
myarray.push(guildMember)
})
let sum = myarray.reduce(function (a, b) {
return a + b
});

let totalSeconds = message.client.uptime / 1000;
let days = Math.floor(totalSeconds / 86400);
totalSeconds %= 86400;
let hours = Math.floor(totalSeconds / 3600);
totalSeconds %= 3600;
let minutes = Math.floor(totalSeconds / 60);
let seconds = Math.floor(totalSeconds % 60);

let uptime = `\`\`\`${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds\`\`\``;

let embed = new MessageEmbed()

.setTitle(`**[Support Server]**`)
  .setDescription(`Hey My name is **${message.client.user.username}** and My Work is fun mode etc.`)

  .setTitle(`${message.client.user.username} Stats`)
  .addFields(
    { name: "<:emoji_209:922153644160348211> Servers:", value: `\`\`\`${servers_count}\`\`\``, inline: true },
    { name: "<:emoji_209:922153644160348211> Users:", value: `\`\`\`${sum}\`\`\``, inline: true },
    { name: "<:emoji_209:922153644160348211> Channels",value: `\`\`\`${message.client.channels.cache.size}\`\`\``, inline: true },
    { name: "<:emoji_209:922153644160348211> Uptime: ", value: uptime , inline: true },
    { name: "<:emoji_209:922153644160348211> Ping:",value: `\`\`\`${Math.round(message.client.ws.ping)} ms\`\`\``, inline: true },
    { name: "<:emoji_209:922153644160348211>  RAM: ", value: `\`\`\`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB\`\`\``, inline: true  },
    { name: "<:emoji_209:922153644160348211> Bot Owner:",value: `\`\`\`! The Crazy#0070\`\`\``},
  )
  .setColor("3498DB")
  .setFooter("Thx For Choosing The Crazy")  

return message.channel.send(embed);
    return message.react("<:emoji_1:956233790513115227>");
}
};

console.log("stats working")