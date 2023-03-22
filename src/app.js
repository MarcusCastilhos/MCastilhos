const express = require('express')
const app = express()
const port = 3001

app.use(express.json())

app.listen(port,() => console.log(`Application running in port: ${port}`))

(async () => {
  const database = require('./db.js');
  const Cliente = require('./models/cliente')

  await database.sync()

  try {
    const clienteCreate = await Cliente.create({
      nome: 'Marcus',
      cpf: '01234567890',
      email: 'marcus@teste.com',
      telefone: '53911112222'
    })
    console.log(clienteCreate)
  } catch (error) {
    console.log(error)
  }
})()