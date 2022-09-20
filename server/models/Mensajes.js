const Sequelize = require("sequelize");
const dataBase = require("../database.js");

const Mensajes = dataBase.define("mensajes", {
  _id: {
    type: Sequelize.INTEGER(11),
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },

  contenido: {
    type: Sequelize.STRING(150),
    allowNull: false,
    validate: {
      len: {
        args: [1, 90],
        msg: "El mensaje debe tener entre 1 y 150 caracteres.",
      },
      notEmpty: {
        args: true,
        msg: "El mensaje no puede ir vacio",
      },
    },
  },

  emisor: {
    type: Sequelize.STRING(90),
    allowNull: false,
    validate: {
      len: {
        args: [5, 300],
        msg: "El email del emisor debe tener entre 3 y 90 caracteres",
      },
    },
  },

  receptor: {
    type: Sequelize.STRING(90),
    allowNull: false,
    validate: {
      len: {
        args: [5, 300],
        msg: "El email del receptor debe tener entre 3 y 90 caracteres",
      },
      notEmpty: {
        args: true,
        msg: "El email del receptor no puede ir vacio",
      },
    },
  },
});

module.exports = Mensajes;
