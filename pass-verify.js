const bcrypt = require ('bcrypt')

async function verifyPassword(){
  const myPassword = 'un password 20.20'
  const myPasswordHashed = '$2b$10$EZCI2ae/K5OJLGfVcgOtM.9yslz6dz6F4XdAgBI6cZZYO5XlnlLKW'
  const isMatch = await bcrypt.compare(myPassword,myPasswordHashed)
  console.log(isMatch)
}

verifyPassword()
