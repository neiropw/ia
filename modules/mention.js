const app = require('../app')
const friendly = require('./friendly')

module.exports = msg => {
  friendly.set_friendly(msg.author)
  
  const reg_mention = new RegExp(`<@${app.client.user.id}> (.*)`)
  const msg_data = msg.content.match(reg_mention)
  const message = msg_data[1]
  const user_friendly = friendly.friendly(msg.author)


  if(/おはよう/.test(message)) {
    console.log('mention: おはよう')
    if(user_friendly <= -3) {
      msg.channel.send(`<@!${msg.author.id}> …おはよう`)
      friendly.remove_friendly(msg.author)
      return
    }
    
    friendly.add_friendly(msg.author)
    if(user_friendly <= 3) {
      msg.channel.send(`<@!${msg.author.id}> おはようー`)
    } 
    else if(user_friendly > 3) {
      msg.channel.send(`<@!${msg.author.id}> おはよ！`)
    }
  }
  else if(/こんにちは/.test(message)) {
    console.log('mention: こんにちは')
    if(user_friendly <= -3) {
      msg.channel.send(`<@!${msg.author.id}> …こんにちは`)
      friendly.remove_friendly(msg.author)
      return
    }
    
    friendly.add_friendly(msg.author)
    if(user_friendly <= 3) {
      msg.channel.send(`<@!${msg.author.id}> こんにちはー`)
    } 
    else if(user_friendly > 3) {
      msg.channel.send(`<@!${msg.author.id}> こんにちは～`)
    }
  }
  else if(/こんばん[はわ]/.test(message)) {
    console.log('mention: こんばんは')
    if(user_friendly <= -3) {
      msg.channel.send(`<@!${msg.author.id}> …こんばんは`)
      friendly.remove_friendly(msg.author)
      return
    }
    
    friendly.add_friendly(msg.author)
    if(user_friendly <= 3) {
      msg.channel.send(`<@!${msg.author.id}> こんばんはー`)
    } 
    else if(user_friendly > 3) {
      msg.channel.send(`<@!${msg.author.id}> こんばんは！`)
    }
  }
  else if(/かわいい*$/.test(message)) {
    console.log('mention: かわいい')

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
    console.log('mention: 暴言')
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