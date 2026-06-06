const express = require('express');
const cors = require('cors');

const app = express();

// permitir todos los origenes y todos los metodos HTTPS
const opcionesCors = {
    origin: '*',// Permitir cualquier sitio web
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'] //
}

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Servidor activo');
});

app.get('/saludo', (req, res) => {
  res.send('Hola comunidad');
});

app.get('/mensaje/:nombre', (req, res) => {
  const nombre = req.params.nombre;
  res.send('Hola ' + nombre);
});
app.post('/reporte', (req, res) => {
    console,log('peticion recibida') 
  const mensaje = req.body.mensaje;
  res.json({
    estado: "Reporte recibido",
    mensaje: mensaje
  });
}); 

app.listen(3000, () => {
  console.log('Servidor ejecutándose en puerto 3000');
});