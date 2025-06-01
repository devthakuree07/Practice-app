const { Sequelize } = require("sequelize");

const sequelize = new Sequelize( 'practiceApp', 'root', '1234',
{
    host: 'localhost',
    dialect: 'mysql'
});

// Sync DB
const syncDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    
    await sequelize.sync({ alter: false }); // Use `force: true` to drop and recreate tables
    console.log("All models were synchronized successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};


module.exports = { sequelize, syncDatabase };