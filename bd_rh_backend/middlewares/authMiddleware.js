const jwt = require("jsonwebtoken");
const config = require("../config");

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: "Token não fornecido." });
  }

  // Espera o formato "Bearer <token>"
  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, config.jwtSecret);
    req.user = decoded; // Guarda os dados do usuário decodificados
    next();
  } catch (err) {
    return res.status(401).json({ message: "Token inválido." });
  }
};
