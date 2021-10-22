const bcrypt = require('bcrypt')

async function hashPassaword(){
  const myPassword = 'un password 20.20'
  const hash = await bcrypt.hash(myPassword, 10)
  console.log(hash)
}

hashPassaword()
