const Discord = require('discord.js')
const discord_config = require('./config/discord')

const mention = require('./modules/mention')
const friendly = require('./modules/friendly')

const client = new Discord.Client()
exports.client = client

client.on('ready', () => {
  console.log(`app[ready] : logged in as ${client.user.tag}!`)
});

client.on('message', msg => {
  if(msg.author.id === client.user.id) return;

  // console.log(msg.content)

  const reg_mention = new RegExp(`<@${client.user.id}>\s.*`)

  if(reg_mention.test(msg.content)) {
    mention(msg)
  }
  else if(/は[?？]/.test(msg.content)) {
    console.log('app[message]: は？')
    msg.react('🤔')
  }
  else if(/(?:草|くさ)[wｗ]/.test(msg.content)) {
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
  else if(/許してください[(?:なん)何]でもしますから/.test(msg.content)) {
    console.log('app[message]: 許してください何でもしますから')
    msg.react('🤔')
    msg.channel.send('<@!${msg.author.id}> ん？今何でもするって言ったよね')
  }
  else if(/🖕/.test(msg.content)) {
    console.log('app[message]: 🖕')
    msg.react('🖕')
  }
  
  if(msg.channel.id === discord_config.control_channel) {
    if(/親密度出力/.test(msg.content)) {
      console.log('app[message]<control>: 親密度出力')
      msg.channel.send(`\`\`\`${JSON.stringify(friendly.friendly_all())}\`\`\``)
    }
  }

})

client.login(discord_config.token)
