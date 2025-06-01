const {  DataTypes } = require("sequelize");
const { sequelize }= require("../configs/db.configs");

const User = sequelize.define(
  "users",
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps:true,
    createdAt: false,
    updatedAt: true,
   }
);


module.exports = { User };