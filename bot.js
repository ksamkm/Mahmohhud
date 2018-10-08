const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '!';

client.on('ready', () => {

    console.log(`Logged in as ${client.user.tag}`);

});



client.on('message',async message => {

if(message.content === 'السلام عليكم') {

  message.channel.send('وعليكم السلام منور والله');



 

}

 });



client.login(process.env.BOT_TOKEN);
