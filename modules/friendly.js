let friendly = {"dummy": 1}

const set_friendly = user => {
  if(!(user.id in friendly)) {
    friendly[user.id] = 0;
  }
}

exports.set_friendly = set_friendly

exports.add_friendly = user => {
  set_friendly(user)
  friendly[user.id]++;
  console.log(`modules.friendly[add_friendly] : ${user.username} --> ${friendly[user.id]}`);
}

exports.remove_friendly = user => {
  set_friendly(user)
  friendly[user.id]--;
  console.log(`modules.friendly[remove_friendly] : ${user.username} --> ${friendly[user.id]}`);
}

exports.friendly = user => {
  console.log(`modules.friendly[friendly] : ${user.username} --> ${friendly[user.id]}`);
  return friendly[user.id]
}

exports.friendly_all = () => {
  console.log(friendly)
  return friendly
}