const bcrypt = require ('bcrypt')

async function verifyPassword(){
  const myPassword = 'un passadorwd 20.20'
  const myPasswordHashed = '$2b$10$TZG3Y8hwcI6y1b0Wc3M1Ve6CUQH2v/4l1sCBcnPYLGlgV1eZuF2J.'
  const isMatch = await bcrypt.compare(myPassword,myPasswordHashed)
  console.log(isMatch)
}

verifyPassword()
