import { Status } from "./Status";
import { Format } from "./Format";
import mongoose, { Document, Schema, Model } from 'mongoose';

const bookSchema = new Schema({
    title: String,
    author: String,
    pages: Number,
    status: String, // Vous pouvez utiliser String pour le moment
    price: Number,
    pagesRead: Number,
    format: String, // Vous pouvez utiliser String pour le moment
    suggestedBy: String,
    finished: Boolean,
  });
export class Book extends Document {
    finished!:boolean;
    constructor(public title:string,public author:string,public pages:number,
         public status:Status,public price:number,public pagesRead:number,public format:Format
         ,public suggestedBy:string) {
super()
        this.finished = this.pagesRead === this.pages ? true : false;
    }

    currentiyAt():number {
        return (this.pagesRead / this.pages) * 100;
    }

    
}

export const BookModel: Model<Book> = mongoose.model<Book>('Book', bookSchema);


