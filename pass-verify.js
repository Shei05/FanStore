const bcrypt = require ('bcrypt')

async function verifyPassword(){
  const myPassword = 'un password 20.20'
  const myPasswordHashed = '$2b$10$BhJkYQhvtOZlRGMQjzIcmOq5FEp8w1Lwf7fFVxCuZFWlPnd/DpCz.'
  const isMatch = await bcrypt.compare(myPassword,myPasswordHashed)
  console.log(isMatch)
}

verifyPassword()
