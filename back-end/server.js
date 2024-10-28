const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Bienvenue sur mon serveur Express !");
});

app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
//intégration de BDD
//se connecter à la BDD
const mysql = require("mysql");

const database = mysql.createConnection({
  host: "localhost", // Ne pas mettre localhost:3000 ici
  user: "root", // Remplace par ton utilisateur MySQL
  password: "Root", // Remplace par ton mot de passe MySQL
  database: "frigo_recettes", // Remplace par ton nom de base de données
});

//exception jetée en cas d'erreur
database.connect(function (err) {
  if (err) throw err;
  console.log("Connecté à la base de données MySQL!");
});