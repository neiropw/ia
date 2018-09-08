let friendly = {"dummy": 1}

const set_friendly = user => {
  if(!(user.id in friendly)) {
    friendly[user.id] = 0;
  }
  console.log(`friendly[set_friendly] : ${user.username} --> ${friendly[user.id]}`);
}

exports.add_friendly = user => {
  set_friendly(user)
  friendly[user.id]++;
}

exports.remove_friendly = user => {
  set_friendly(user)
  friendly[user.id]--;
}

exports.friendly = user => {
  return friendly[user.id]
}

exports.friendly_all = () => {
  console.log(friendly)
  return friendly
}