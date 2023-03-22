(async () => {

  const database = require('./db.js');
  const Produto = require('./produto')

  await database.sync()

  try {
    await database.authenticate();
    console.log('Conexão estabelecida com sucesso.');
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
  }

  // const novoProduto = await Produto.create({
  //   nome: 'Mouse USB',
  //   preco: 15,
  //   descricao: 'Informática'
  // })


  // const produto = await Produto.findAll()
  // console.log(produto);
})();