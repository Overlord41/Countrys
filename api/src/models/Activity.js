const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('activity', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    dificult: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validator: {
          min:1,
          max: 5
        }
    },
    duration: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    temporada: {
        type: DataTypes.ENUM('Verano', 'Otoño', 'Invierno', 'Primavera'),
        allowNull: false
    }
  }, { timestamps:false });
};