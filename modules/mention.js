const app = require('../app')
const friendly = require('./friendly')

module.exports = msg => {
  friendly.set_friendly(msg.author)
  
  const reg_mention = new RegExp(`<@${app.client.user.id}>[\s 　](.*)`)
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
  else if(/大?[好す]き/.test(message)) {
    console.log('mention: 好き')
    if(user_friendly <= -3) {
      msg.channel.send(`<@!${msg.author.id}> 私は嫌いです。`)
      friendly.remove_friendly(msg.author)
      return
    }
    
    friendly.add_friendly(msg.author)
    if(user_friendly <= 3) {
      msg.channel.send(`<@!${msg.author.id}> ありがとうございます…//`)
    } 
    else if(user_friendly > 10) {
      msg.channel.send(`<@!${msg.author.id}> 私も好き`)
    }
  }
  else if(/かわいい+$/.test(message)) {
    console.log('mention: かわいい')

    if(user_friendly < -7) {
      msg.react('🔪')
      return
    }
    else if(user_friendly <= -6) {
      msg.channel.send(`<@!${msg.author.id}> やめてください、刺しますよ`)
      friendly.remove_friendly(msg.author)
      return
    }
    else if(user_friendly <= -3) {
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
  else if(/あほ|アホ|ばか|バカ|くそ|クソ|[死し]ね|はげ|ハゲ|ぶす|ブス/.test(message)) {
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
  else if(/ごめん|許して/.test(message)) {
    console.log('mention: ごめん')
    if(user_friendly <= 3) friendly.add_friendly(msg.author)

    if(user_friendly < -7) {
      msg.channel.send(`<@!${msg.author.id}> そんなことで許されると思ってるんですか？`)
    }
    else if(user_friendly <= -6) {
      msg.channel.send(`<@!${msg.author.id}> ごめんで済んだら警察はいらないんですよ？`)
    }
    else if(user_friendly <= -3) {
      msg.channel.send(`<@!${msg.author.id}> 別に何も思ってません`)
    }
    else if(user_friendly <= 3) {
      msg.channel.send(`<@!${msg.author.id}> 別に謝らなくてもいいんですよ？`)
    } 
    else if(user_friendly > 3) {
      msg.channel.send(`<@!${msg.author.id}> んー？なにが？`)
    }

  }
}