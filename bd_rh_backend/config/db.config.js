// config/db.config.js
const mongoose = require('mongoose');

async function connectDB() {
  try {
    await mongoose.connect('mongodb+srv://student1900382:e89F9iB59dGXDKD@mongodbapprh.mongocluster.cosmos.azure.com/admin?tls=true&authMechanism=SCRAM-SHA-256&retrywrites=false&maxIdleTimeMS=120000',{});
    console.log('Ligado ao MongoDB (Azure) com sucesso!');
  } catch (error) {
    console.error('Erro ao conectar ao MongoDB (Azure):', error);
  }
}

module.exports = connectDB;
