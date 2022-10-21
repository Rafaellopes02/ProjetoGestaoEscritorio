const FuncionarioTrabalhoModel = require("../data/models/funcionariotrabalho");

exports.getAll = async (req, res) => {
  const functrab = await FuncionarioTrabalhoModel.findAll();

  if (functrab) {
    //cenario de sucesso
    return res.json({ success: true, data: functrab });
  } else {
    //cenario de erro
    return res.json({ success: false });
  }
};

exports.getById = async (req, res) => {
  const id = req.params.Num_Funcionario;
  const functrab = await FuncionarioTrabalhoModel.findByPk(id);

  if (functrab) {
    //cenario de sucesso
    return res.json({ success: true, data: functrab });
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
