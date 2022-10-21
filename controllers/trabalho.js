const TrabalhoModel = require("../data/models/trabalhos");

exports.getAll = async (req, res) => {
  const trabalho = await TrabalhoModel.findAll();

  if (trabalho) {
    //cenario de sucesso
    return res.json({ success: true, data: trabalho });
  } else {
    //cenario de erro
    return res.json({ success: false });
  }
};

exports.getById = async (req, res) => {
  const id = req.params.IdTrabalho;
  const trabalho = await TrabalhoModel.findByPk(id);

  if (trabalho) {
    //cenario de sucesso
    return res.json({ success: true, data: trabalho });
  } else {
    //cenario de erro
    return res.json({ success: false });
  }
};

/*exports.create = async (req, res) => {
  const {
    NPessoa,
    Nome,
    Data_Nascimento,
    Nacionalidade,
    Cidade,
    Freguesia,
    Morada,
  } = req.body;
  const pessoa = await PessoaModel.create({
    NPessoa,
    Nome,
    Data_Nascimento,
    Nacionalidade,
    Cidade,
    Freguesia,
    Morada,
  });

  if (pessoa) {
    //cenario de sucesso
    return res.json({ success: true, data: pessoa });
  } else {
    //cenario de erro
    return res.json({ success: false });
  }
};

exports.update = async (req, res) => {
  const {
    NPessoa,
    Nome,
    Data_Nascimento,
    Nacionalidade,
    Cidade,
    Freguesia,
    Morada,
  } = req.body;

  const pessoa = await PessoaModel.findByPk(NPessoa);
  pessoa.Nome = Nome;
  pessoa.Data_Nascimento = Data_Nascimento;
  pessoa.Nacionalidade = Nacionalidade;
  pessoa.Cidade = Cidade;
  pessoa.Freguesia = Freguesia;
  pessoa.Morada = Morada;

  const updateRes = await pessoa.save();

  if (updateRes) {
    //cenario de sucesso
    return res.json({ success: true });
  } else {
    //cenario de erro
    return res.json({ success: false });
  }
};

exports.delete = async (req, res) => {
  const { NPessoa } = req.body;

  await PessoaModel.destroy({
    where: { NPessoa },
  });
  return res.json({ success: true });
};*/
