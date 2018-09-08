const Discord = require('discord.js')
const discord_config = require('./config/discord')

const client = new Discord.Client()

client.on('ready', () => {
  console.log(`app[ready] : logged in as ${client.user.tag}!`)
});

client.on('message', msg => {
  if(msg.author.id === client.user.id) return;

  console.log(msg.content)

  if(/かわいい*$/.test(msg.content)) {
    console.log('app[message]: かわいい')
    msg.react('❤')
    msg.channel.send(`<@!${msg.author.id}> ありがと！`)
  }
  else if(/あほ|ばか|くそ|[死し]ね/.test(msg.content)) {
    console.log('app[message]: 暴言')
    msg.react('😢')
    msg.channel.send(`<@!${msg.author.id}> ひどい`)
  }
  else if(/は[?？]/.test(msg.content)) {
    console.log('app[message]: は？')
    msg.react('🤔')
  }
  else if(/草|くさ[wｗ]/.test(msg.content)) {
    console.log('app[message]: 草ｗ')
    msg.react('💢')
    msg.channel.send(`<@!${msg.author.id}> 草に草を生やすな`)
  }
  else if(/草$/.test(msg.content)) {
    console.log('app[message]: 草')
    msg.react('🌿')
  }
  else if(/なくなった$/.test(msg.content)) {
    console.log('app[message]: なくなった')
    msg.react('😢')
  }
  else if(/わかる/.test(msg.content)) {
    console.log('app[message]: わかる')
    msg.react('👍')
  }
  else if(/(՞ةڼ◔)/.test(msg.content)) {
    console.log('app[message]: (՞ةڼ◔)')
    msg.channel.send('(՞ةڼ◔) ｲﾋ-wwwww')
  }
  else if(/🖕/.test(msg.content)) {
    console.log('app[message]: 🖕')
    msg.react('🖕')
  }
})

client.login(discord_config.token)
