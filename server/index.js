const { response } = require('express');
const express = require('express');

const app = express();

const porta = process.env.PORT || 80;

const bd = [
    {
        nome: "Calabresa",
        foto: "https://t1.rg.ltmcdn.com/pt/images/9/8/3/img_pizza_calabresa_e_mussarela_4389_orig.jpg",
        preco: 22.0,
    },
    {
        nome: "Frango com Catupiry",
        foto: "https://i.pinimg.com/564x/7b/55/23/7b55236e17372bcb1315610c439cb0cb.jpg",
        preco: 10.0,
    },
    {
        nome: "Portuguesa",
        foto: "https://pizzariameurancho.com.br/wp-content/uploads/2016/06/pizza-portuguesa_min.jpg",
        preco: 26.0,
    },
    {
        nome: "Carne de Sol",
        foto: "https://www.picanhacia.com.br/wp-content/uploads/2017/01/11379225_1180312101994735_933388139_n-13-510x320.jpg",
        preco: 40
    }
];

app.use(express.json());

// middleware do express que inclui um caminho de arquivos estáticos e os serve
app.use(express.static(process.env.PWD + '/public'))


app.get("/consulta", (req, res) => {
    // consulta bd
    // converte em objetos json
    // retorna
    res.send( JSON.stringify(bd) );
});

app.get("/consulta/:numpizza", (req, res) => {
    const numPizza = req.params.numpizza;
    
    if (numPizza >= 0 && numPizza < bd.length) {
        res.send( JSON.stringify( bd[numPizza] ) );
    } else {
        res.status(404).send();
    }
});

app.post("/cadastro", (req, res) => {
    const pizza = req.body;
    
    bd.push(pizza);
    
    res.send("{ result: 'OK' }");
});

app.get("/", function(req, res){
    // função que renderiza o conteúdo do diretório estático
    res.render("index");
});

app.listen(porta, () => {
    console.log('Servidor executando!');
});

