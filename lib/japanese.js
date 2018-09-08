exports.kanaToHira = str => {
  return str.replace(/[\u30a1-\u30f6]/g, match => {
    const chr = match.charCodeAt(0) - 0x60
    return String.fromCharCode(chr)
  })
}

exports.kanaToHira = str => {
  return str.replace(/[\u30a1-\u30f6]/g, match => {
    const chr = match.charCodeAt(0) + 0x60
    return String.fromCharCode(chr)
  })
}
