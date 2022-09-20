const express = require("express");
const router = express.Router();
const Mensajes = require("./models/Mensajes.js");

module.exports = () => {
  router.get("/get-mensajes/:email", async (req, res) => {
    const mensajes = await Mensajes.findAll({
      where: { receptor: req.params.email },
    });
    res.send(mensajes);
  });

  router.get("/get-mensajes-enviados/:email", async (req, res) => {
    const mensajes = await Mensajes.findAll({
      where: { emisor: req.params.email },
    });
    res.send(mensajes);
  });

  router.post("/post-mensajes", async (req, res) => {
    const { contenido, receptor, emisor } = req.body;
    try {
      await Mensajes.create({
        contenido: contenido,
        receptor: receptor,
        emisor: emisor,
      });
      res.send("Mensajes enviado");
    } catch (e) {
      res.send(e.errors[0].message);
    }
  });

  return router;
};
