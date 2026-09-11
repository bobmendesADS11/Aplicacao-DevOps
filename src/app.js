const express = require('express');

const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (req, res) => {
    res.sendFile('views/index.html', { root: __dirname });
})


const data = {
  integrantes: [
    { nome: 'Moacyr mendes de oliveira neto' },
    { nome: 'Caio Mazziero Schultz' },
    { nome: 'Henrique Pereira Rodrigues Nunes' }

    
  ]
};


app.get('/integrantes', (req, res) => {
  res.json(data);
});






app.listen(port);