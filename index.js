import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Integración continua trabajando!!');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});