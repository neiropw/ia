const Discord = require('discord.js')
const discord_config = require('./config/discord')

const client = new Discord.Client()

client.on('ready', () => {
  console.log(`app[ready] : logged in as ${client.user.tag}!`)
});

client.on('message', msg => {
  if(msg.content === 'かわいい') {
    console.log('app[message]: かわいい')
    msg.channel.send('ありがと！')
  }
})

client.login(discord_config.token)
