const Discord = require('discord.js');
const db = require('quick.db')
const Jimp = require('jimp')

exports.run = (client, message, args) => { 

 var user = message.mentions.users.first() || message.author; 
  
const embed = new Discord.RichEmbed()
.setAuthor("Reis Network", client.user.avatarURL)
.setTitle("Reis Network BOT")
.setURL("https://goo.gl/vJvz9g")
.setDescription("Botu kendi sunucuna davet edebilirsin :)")
.setColor("BLUE")
.setTimestamp()
.setFooter("Reis Network", client.user.avatarURL)
.addField("Davet Linki", "https://goo.gl/vJvz9g")
message.channel.send(embed)
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['invite'], 
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: 'taslak', 
  usage: 'sayac-hg-msg'
};