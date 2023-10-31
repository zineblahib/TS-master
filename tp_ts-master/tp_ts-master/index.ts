// Importer la bibliothèque Express avec la syntaxe ES modules
import express from "express";
import cors from "cors";
const path = require('path');
const host = "localhost";
import { Repomongo } from "./src/db";
import { Book } from "./src/repo/book";
const port = 3001;
let repo:Repomongo=new Repomongo()
const app = express();
app.set('view engine', 'ejs');
app.set('html', path.join(__dirname, 'html')); // Assurez-vous d'ajuster le chemin selon l'emplacement de vos vues

const bodyParser = require('body-parser');

const corsOptions = {
  origin: `http://${host}:4200`, // Remplacez par l'origine de votre application Angular
};

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});


app.post("/add",async(req,res)=>{
  console.log(req.body)
  let bok:Book= req.body as Book;
  let bod=  await repo.save(bok);
  if(bod){
    let data = await repo.getall();
    res.render('table', { data });   }

})
app.get('/tab',async (req, res) => {
  let data = await repo.getall();
  res.render('table', { data }); 
});

// Démarrer le serveur
const server = app.listen(port, host, () => {
  console.log(`Serveur Express en cours d'exécution sur le port ${port}`);
});


