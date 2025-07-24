import express from "express";
import app from "../firebase/app.js"; // Importa a configuração do Firebase
import { getFirestore } from "firebase-admin/firestore"; //

const produtosRouter = express.Router();
const db = getFirestore(app); //inicia a comunicação com o banco de dados Firestore
// const storage = getStorage(app); //inicia a comunicação com o Storage do Firebase

produtosRouter.get("/produtos", async (req, res) => {
    try {
        const documents = await db.collection("produtos").get(); // busca todos os documentos da coleção "produtos" e o get retorna como um array
        const produtos = [];
        documents.forEach(doc => produtos.push(doc.data()));  //callback que adiciona os dados de cada documento no array produtos; O método forEach itera sobre cada documento retornado e adiciona os dados ao array produtos; O método data() retorna os dados do documento como um objeto JavaScript 
        return res.status(200).json(produtos);
    } catch (error) {
        return res.status(500).json({ msg: "Erro interno do servidor." });
    }
});




produtosRouter.get("/produtos/:id", async (req, res) => {
try {
    const id = req.params.id;                                          // Obtém o ID do produto a partir dos parâmetros da rota; O parâmetro :id na rota permite capturar o ID do produto da URL
    const doc = await db.collection("produtos").doc(id).get();        // o método doc(id) busca o documento específico com o ID fornecido

    if (doc.exists) {
        const produto = doc.data()                                       // Verifica se o documento existe
        return res.status(200).json(produto);
    } else {
        return res.status(404).json({ msg: "Produto não encontrado." });
    }
 }catch (error) { 
    return res.status(500).json({ msg: "Erro interno do servidor." });}
});



produtosRouter.post("/produtos", async (req, res) => { // Rota para cadastrar um novo produto
    try {
    const produto = req.body; // aqui ele recebe os dados do produto (no postman)
    await db.collection("produtos").add(produto);// O método add() adiciona um novo documento à coleção "produtos" com os dados do produto fornecido no corpo da requisição; O Firestore gera automaticamente um ID único para o novo documento
    return res.status(201).json({ msg: "Produto cadastrado." });
    } catch (error) {
        return res.status(500).json({ msg: "Erro interno do servidor." });
    }
});


produtosRouter.put("/produtos/:id", async (req, res) => { // Rota para atualizar um produto existente
    try{
    const id = req.params.id; // precisa do id pra não atualizar todos os produtos
    const produto = req.body; // Recebe os dados do produto a serem atualizados
    
    const docRef = db.collection("produtos").doc(id); // Obtém uma referência ao documento com o ID fornecido
    const doc = await docRef.get(); // consulta a referência no banco de dados
    
    if (doc.exists) { // verifica se o documento foi encontrado, se existe
        await docRef.update(produto); // Atualiza o documento com os novos dados do produto, não funciona se for só doc, tem que ser na referencia docRef
        return res.status(200).json({ msg: "Produto alterado." });
    } else {
        return res.status(404).json({ msg: "Produto não encontrado." });
    }
} catch (error) {
        return res.status(500).json({ msg: "Erro interno do servidor." });
    }
});

produtosRouter.delete("/produtos/:id", async (req, res) => { // Rota para excluir um produto
    try {
    
    const id = req.params.id;
    const docRef = db.collection("produtos").doc(id); 
    const doc = await docRef.get(); 

       if (doc.exists) {
        await docRef.delete();
        return res.status(200).json({ msg: "Produto excluido." });
    } else {
        return res.status(404).json({ msg: "Produto não encontrado." });
    }
    } catch (error) {
        return res.status(500).json({ msg: "Erro interno do servidor." });
    }
});

export default produtosRouter; //
