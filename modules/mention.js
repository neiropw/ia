const app = require('../app')

module.exports = msg => {
  const reg_mention = new RegExp(`<@${app.client.user.id}> (.*)`)
  const msg_data = msg.content.match(reg_mention)
  const message = msg_data[1]

  if(/かわいい*$/.test(message)) {
    console.log('app[message]: かわいい')
    msg.react('❤')
    msg.channel.send(`<@!${msg.author.id}> ありがと！`)
  }
  else if(/あほ|ばか|くそ|[死し]ね/.test(message)) {
    console.log('app[message]: 暴言')
    msg.react('😢')
    msg.channel.send(`<@!${msg.author.id}> ひどい`)
  }
}