const app = require('../app')
const friendly = require('./friendly')

module.exports = msg => {
  const reg_mention = new RegExp(`<@${app.client.user.id}> (.*)`)
  const msg_data = msg.content.match(reg_mention)
  const message = msg_data[1]
  const user_friendly = friendly.friendly(msg.author)

  if(/かわいい*$/.test(message)) {
    console.log('app[message]: かわいい')

    if(user_friendly <= -3) {
      msg.channel.send(`<@!${msg.author.id}> 話しかけないでください`)
      friendly.remove_friendly(msg.author)
      return
    }

    msg.react('❤')
    friendly.add_friendly(msg.author)
    if(user_friendly <= 3) {
      msg.channel.send(`<@!${msg.author.id}> ありがとうございます！`)
    } 
    else if(user_friendly > 3) {
      msg.channel.send(`<@!${msg.author.id}> ありがと！！`)
    }

  }
  else if(/あほ|ばか|くそ|[死し]ね/.test(message)) {
    console.log('app[message]: 暴言')
    friendly.remove_friendly(msg.author)

    if(user_friendly <= -3) {
      msg.channel.send(`<@!${msg.author.id}> そうですか`)
      return
    }
    
    msg.react('😢')
    if(user_friendly <= 3) {
      msg.channel.send(`<@!${msg.author.id}> ひどいです…`)
    } 
    else if(user_friendly > 3) {
      msg.channel.send(`<@!${msg.author.id}> ひどい！`)
    }
  }
}