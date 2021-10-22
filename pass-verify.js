const bcrypt = require ('bcrypt')

async function verifyPassword(){
  const myPassword = 'un password 20.20'
  const myPasswordHashed = '$2b$10$of4EDket9qe4G.Hnp0tla.lVtXdsai1Ys8xWPmEyQ1oR5bx.Mdism'
  const isMatch = await bcrypt.compare(myPassword,myPasswordHashed)
  console.log(isMatch)
}

verifyPassword()
