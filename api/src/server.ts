import express from 'express';

// criando aplicação
const App = express();

// rota de listagem 
App.get('/users', (req, res) => {
    res.json({
      messager: "thiago morgado",
      Projet: 'Ecoleta com typescript',
      Autho: 'Thiago do nascimento morgado',
      yaer: '29'
    })
});

App.listen(3333)