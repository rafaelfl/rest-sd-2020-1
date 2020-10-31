const { response } = require('express');
const express = require('express');

const app = express();

const porta = process.env.PORT || 80;

app.get("/consulta", (req, res) => {
    console.log("Teste");

    res.send("Minha resposta! :)");
});

app.listen(porta, () => {
    console.log('Servidor executando!');
});

