// import mysql from "mysql";
import mongoose from "mongoose";
import { Book, BookModel } from "./repo/book";

export const connec = mongoose
  .connect(
    "mongodb+srv://abdoufekkak:SRO5Br1UUI0wtiz6@cluster0.nw9fxbh.mongodb.net/test",
  )
  .then(() => {
    console.log("connection");
  })
  .catch((e) => console.log(e),);

export class Repomongo{
    constructor(){

    }
   async save(book:Book){
const newBook=new BookModel(book)

try{
    return book = await newBook.save();
}catch(e:any){
console.log(e);
}

    }
    delete(){
        
    }
 async   getall(){
        

try{
   let  books:Book[] = await BookModel.find({}) ;
   return books;
}catch(e:any){
console.log(e);
}

    }
}
  // Créer un nouveau livre et l'enregistrer dans la base de données
const newBook = new BookModel({
    title: 'Titre du Livre',
    author: 'Auteur',
    pages: 300,
    status: 'Read',
    price: 20,
    pagesRead: 150,
    format: 'Print',
    suggestedBy: 'Quelqu\'un',
    finished: false,
    
  });
  
//   newBook.save((err:any, savedBook:Book) => {
//     if (err) {
//       console.error('Erreur lors de l\'enregistrement du livre :', err);
//     } else {
//       console.log('Livre enregistré avec succès :', savedBook);
//     }
//   });
  
//   BookModel.deleteOne({ title: 'Titre du Livre' }, (err:any) => {
//     if (err) {
//       console.error('Erreur lors de la suppression du livre :', err);
//     } else {
//       console.log('Livre supprimé avec succès.');
//     }
//   });