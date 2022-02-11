const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Razas', {
    ID: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    Nombre: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    AlturaMin: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    AlturaMax: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    PesoMin: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    PesoMax: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    Vida: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
};

