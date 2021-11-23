const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    id: {
      type: DataTypes.STRING(3),
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flag: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isUrl: true
      }
    },
    continents: {
      type: DataTypes.STRING,
      allowNull: false
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "No have"
    },
    subregion: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "No have"
    },
    area: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    population: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, { timestamps:false });
};
