const express = require('express')
const app = express()
const fs = require('fs');

app.listen(3000, console.log("¡Servidor encendido!"))
app.get("/home", (req, res) => {
 res.send("Hello World Express Js")
})

app.get("/perfil", (req, res) => {
    res.send("Elon Reeve Musk");
  });

  app.get("/", (req, res) => {
    res.send("Hello World Express Js");
  });


  app.get("/productos", (req, res) => {
    fs.readFile('productos.json', 'utf8', (err, data) => {
      if (err) {
        res.status(500).send('Error reading productos.json');
        return;
      }
      res.json(JSON.parse(data));
    });
  });

  app.post("/productos", (req, res) => {
    const producto = req.body
    const productos = JSON.parse(fs.readFileSync("productos.json"))
    productos.push(producto)
    fs.writeFileSync("productos.json", JSON.stringify(productos))
    res.send("Producto agregado con éxito!")
   })
   

  app.get("/usuarios", (req, res) => {
    fs.readFile('usuarios.json', 'utf8', (err, data) => {
      if (err) {
        res.status(500).send('Error reading usuarios.json');
        return;
      }
      res.json(JSON.parse(data));
    });
  });