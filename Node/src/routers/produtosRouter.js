import express from "express";

const produtosRouter = express.Router();

const produtos = [
    {
        name: "Smart TV Samsung 32\"",
        quantidade: 2000,
        preco: 1500,
    },
    {
        name: "Notebook Acer Nitro 5",
        quantidade: 1000,
        preco: 5500,
    },
    {
        name: "Gabinete Gamer 16GB i59400",
        quantidade: 1000,
        preco: 4500,
    }
];

produtosRouter.get("/produtos", (req, res) => {
    res.status(200).json(produtos);
});

produtosRouter.get("/produtos/:id", (req, res) => {
    const id = Number(req.params.id);

    if (Number.isNaN(id)) {
        return res.status(400).json({ msg: "Digite apenas numeros." });
    }

    const dados = produtos[id-1];

    if (dados) {
        return res.status(200).json(dados);
    } else {
        return res.status(404).json({ msg: "Produto não encontrado." });
    }
});

produtosRouter.post("/produtos", (req, res) => {
    const produto = req.body;
    produtos.push(produto);
    return res.status(201).json({ msg: "Produto cadastrado." });
});

export default produtosRouter;