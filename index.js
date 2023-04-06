import express from 'express';
import mongoose, { Schema, model } from 'mongoose'
import {v4} from 'uuid'

const app = express();

const db = await mongoose.connect("mongodb://mongodb/testdb")
console.log(db.connection.db.databaseName);

const ProductSchema = new Schema({
  name: String
})

const ProductModel = model('Product', ProductSchema)

app.get('/', async (req, res) => {

  const newProduct = await ProductModel.create({
    name: 'laptop'
  })

  res.json({
    id: v4(),
    newProduct
  })
});

app.listen(3000);
console.log('Server on port [3000] ');