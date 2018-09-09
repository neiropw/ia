let friendly = { }

const setFriendly = user => {
  if(!(user.id in friendly)) {
    friendly[user.id] = 0
  }
}

exports.setFriendly = setFriendly

exports.addFriendly = user => {
  setFriendly(user)
  friendly[user.id]++
  console.log(`modules.friendly[addFriendly] : ${user.username} --> ${friendly[user.id]}`)
  return true
}

exports.removeFriendly = user => {
  setFriendly(user)
  friendly[user.id]--
  console.log(`modules.friendly[removeFriendly] : ${user.username} --> ${friendly[user.id]}`)
  return true
}

exports.friendly = user => {
  setFriendly(user)
  return friendly[user.id]
}

exports.friendlyAll = () => {
  console.log(friendly)
  return friendly
}