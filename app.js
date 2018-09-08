const Discord = require('discord.js')
const discordConfig = require('./config/discord')

const mention = require('./modules/mention')

const client = new Discord.Client()
exports.client = client

client.login(discordConfig.token)

client.on('ready', () => {
  console.log(`app[ready] : logged in as ${client.user.tag}!`)
})

client.on('message', msg => {
  if(msg.author.id === client.user.id) return
  const regMention = new RegExp(`<@${client.user.id}>[ 　].*`)

  if(regMention.test()) {
    mention(msg)
  } // メンション付きのメッセージ
  // else {
  //   onMessage(msg)
  // } // 通常のメッセージ

})

// 通常のメッセージ
// const onMessage = msg => {}
