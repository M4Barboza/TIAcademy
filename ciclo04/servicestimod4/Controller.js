const express = require("express");
const cors = require("cors");

const models = require("./models");
/* const req = require("express/lib/request");
const res = require("express/lib/response"); */

const app = express();
app.use(cors());
app.use(express.json());

let cliente = models.Cliente;
let servico = models.Servico;
let pedido = models.Pedido;

app.get("/", function (req, res) {
  res.send("Olá Mundo!");
});
app.get("/cliente", function (req, res) {
  res.send("Rota cliente feito!");
});

app.get("/servico", function (req, res) {
  res.send("Rota serviços feito!");
});
app.get("/pedido", function (req, res) {
  res.send("Rota pedido feito!");
});

app.post("/servicos", async (req, res) => {
  await servico.create(req.body);
  res.send("Serviço foi inserido!");
  await aguardar(3000);

  function aguardar(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve.ms);
    });
  }
}); //Desafio Aula 02

app.post("/clientes", async (req, res) => {
  let create = await cliente.create(req.body);
  res.send("Cliente foi inserido!");
  await aguardar(3000);
  function aguardar(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve.ms);
    });
  }
}); //Desafio Aula 02

app.post("/pedidos", async (req, res) => {
  let create = await pedido.create(req.body);
  res.send("Pedido foi inserido!");
  await aguardar(3000);
  function aguardar(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve.ms);
    });
  }
}); //Desafio Aula 02

app.get("/listaservicos", async (req, res) => {
  await servico
    .findAll({
      order: [["id", "ASC"]],
    })
    .then(function (servicos) {
      res.json({ servicos });
    }); //todos métodos vão entre "()"
});

app.get("/ofertas", async (req, res) => {
  await servico.count("id").then(function (servicos) {
    res.json(servicos);
  });
});

app.get("/servico/:id", async (req, res) => {
  servico
    .findByPk(req.params.id)
    .then((servico) => {
      return res.json({
        error: false,
        servico,
      });
    })
    .catch(function (erro) {
      return res.status(400).json({
        error: true,
        message: "Código não está cadastrado",
      });
    });
});

//Lista Cliente
app.get("/listaclientes", async (req, res) => {
  await cliente
    .findAll({
      raw: true,
    })
    .then((cliente) => {
      res.json({
        cliente,
      });
    });
});
// Lista Cliente Antigo
app.get("/listaclientesAntigo", async (req, res) => {
  await cliente
    .findAll({
      order: [["createdAt", "ASC"]],
    })
    .then((cliente) => {
      res.json({
        cliente,
      });
    });
});
//Pedido ordenado
app.get("/pedidomaior", async (req, res) => {
  await pedido
    .findAll({
      order: [["valor", "DESC"]],
    })
    .then((pedido) => {
      res.json({
        pedido,
      });
    });
});
//Total de cliente
app.get("/totalcliente", async (req, res) => {
  await cliente.count("id").then((cliente) => {
    res.json(cliente);
  });
});

//Lista de Pedidos
app.get("/listapedidos", async (req, res) => {
  await pedido
    .findAll({
      raw: true,
    })
    .then((pedido) => {
      res.json({
        pedido,
      });
    });
});
//Quantidade de pedidos
app.get("/totalpedido", async (req, res) => {
  await pedido.count("id").then((pedido) => {
    res.json(pedido);
  });
});

app.get("/somavalorcliente/:id", async (req, res) => {
  await pedido
    .sum("valor", { where: { ClienteId: req.params.id } })
    .then((pedido) => {
      return res.json({
        pedido,
      });
    });
}); //Desafio Aula 03

app.get("/atualizaservico", async (req, res) => {
  await servico.findByPk(1).then((servico) => {
    servico.nome = "HTML/CSS/JS";
    servico.descricao = "Páginas estáticas e dinâmicas estilizadas";
    servico.save();
    return res.json({ servico });
  });
});

app.put("/editarservico", (req, res) => {
  servico
    .update(req.body, {
      where: { id: req.body.id },
    })
    .then(function () {
      return res.json({
        error: false,
        message: "Serviço foi alterado com sucesso.",
      });
    })
    .catch(function (erro) {
      return res.status(400).json({
        error: true,
        message: "Erro na alteração do serviço.",
      });
    });
});

app.get("/servicospedidos", async (req, res) => {
  await servico
    .findByPk(1, {
      include: [{ all: true }],
    })
    .then((servico) => {
      return res.json({ servico });
    });
});

app.put("/editarpedido", (req, res) => {
  pedido
    .update(req.body, {
      where: { ServicoId: req.body.ServicoId },
    })
    .then(function () {
      return res.json({
        error: false,
        message: "Pedido modificado com sucesso.",
      });
    })
    .catch(function (erro) {
      return res.status(400).json({
        error: true,
        message: "Não foi possível modificar o pedido.",
      });
    });
});

//pedido do serviço passando id (Exer1)
app.get("/servicocliente", async (req, res) => {
  pedido
    .findOne({
      where: { ClienteId: { [Op.eq]: req.body.ClienteId } },
    })
    .then((pedidos) => {
      return res.json({
        error: false,
        pedidos,
      });
    })
    .catch(function (erro) {
      return res.status(400).json({
        error: true,
        message: "Cliente não está cadastrado",
      });
    });
});
//Exer2
app.put("/editarcliente/", (req, res) => {
  cliente
    .update(req.body, {
      where: { id: req.body.id },
    })
    .then(function () {
      return res.json({
        error: false,
        message: "Cliente modificado com sucesso.",
      });
    })
    .catch(function (erro) {
      return res.status(400).json({
        error: true,
        message: "Não foi possível modificar o cliente.",
      });
    });
});
//Exer3
app.put("/editarpedido", (req, res) => {
  pedido
    .update(req.body, {
      where: { id: req.body.id },
    })
    .then(function () {
      return res.json({
        error: false,
        message: "Serviço modificado com sucesso.",
      });
    })
    .catch(function (erro) {
      return res.status(400).json({
        error: true,
        message: "Não foi possível modificar o serviço.",
      });
    });
});

app.get("/excluircliente", async (req, res) => {
  cliente.destroy({
    where: { id: 2 },
  });
});
app.delete("/apagarcliente/:id", (req, res) => {
  cliente
    .destroy({
      where: { id: req.params.id },
    })
    .then(function () {
      return res.json({
        error: false,
        message: "Cliente foi excluído com sucesso.",
      });
    })
    .catch(function (erro) {
      return res.status(400).json({
        error: true,
        message: "Não foi possível excluir o cliente.",
      });
    });
});
app.delete("/apagarservico/:id", (req, res) => {
  servico
    .destroy({
      where: { id: req.params.id },
    })
    .then(function () {
      return res.json({
        error: false,
        message: "Serviço foi excluído com sucesso.",
      });
    })
    .catch(function (erro) {
      return res.status(400).json({
        error: true,
        message: "Não foi possível excluir o serviço.",
      });
    });
});
app.delete("/apagarpedido/:id", (req, res) => {
  pedido
    .destroy({
      where: { id: req.params.id },
    })
    .then(function () {
      return res.json({
        error: false,
        message: "Pedido foi excluído com sucesso.",
      });
    })
    .catch(function (erro) {
      return res.status(400).json({
        error: true,
        message: "Não foi possível excluir o pedido.",
      });
    });
});
//desafio aula 4, Exer1: Faça uma rota que liste todos os pedidos de um cliente
app.get("/pedidoscliente/:id", async (req, res) => {
  await pedido
    .findAll({ where: { ClienteId: [req.params.id] } })
    .then(function (pedidos) {
      res.json(pedidos);
    });
  console.log(pedidos, valor, ClienteId);
});

//desafio aula 4, Exer2: Crie uma nova rota que permite alterar esses pedido utilizando o ClienteId
app.put("/editarpedidocliente/:id", (req, res) => {
  pedido
    .update(req.body, {
      where: { id: req.params.id },
    })
    .then(function () {
      return res.json({
        error: false,
        message: "Pedido modificado com sucesso.",
      });
    })
    .catch(function (erro) {
      return res.status(400).json({
        error: true,
        message: "Não foi possível modificar o pedido.",
      });
    });
});

app.get("/cliente/:id", async (req, res) => {
  cliente
    .findByPk(req.params.id)
    .then((cliente) => {
      return res.json({
        error: false,
        cliente,
      });
    })
    .catch(function (erro) {
      return res.status(400).json({
        error: true,
        message: "Código não cadastrado!",
      });
    });
});

app.get("/pedido/:id", async (req, res) => {
  pedido
    .findByPk(req.params.id)
    .then((pedido) => {
      return res.json({
        error: false,
        pedido,
      });
    })
    .catch(function (erro) {
      return res.status(400).json({
        error: true,
        message: "Código não cadastrado!",
      });
    });
});

let port = process.env.PORT || 3001;

app.listen(port, (req, res) => {
  console.log("Servidor ativo");
});
