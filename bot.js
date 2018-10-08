const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '';

client.on('ready', () => {

    console.log(`Logged in as ${client.user.tag}`);

});



client.on('message',async message => {

if(message.content === 'اسكت') {

  message.channel.send('وعليكم السلام');

 var embed = new Discord.RichEmbed() 

    .setColor('BLACK')

   

    message.channel.sendEmbed(embed);

}

 });



client.login(process.env.BOT_TOKEN);
