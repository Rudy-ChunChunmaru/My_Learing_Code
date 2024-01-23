import _ from "lodash";
import "reflect-metadata";
import { plainToClass } from "class-transformer";
import { Product } from "./product .model";
import { validate } from "class-validator";

const products = [
  { title: "A Carpet", price: 29.99 },
  { title: "A Book", price: 12.99 },
];

// const loadedProducts = product.map((prod) => {
//   return new Product(prod.title, prod.price);
// });

const newProduct = new Product("", -0.99);
validate(newProduct).then((error) => {
  if (error.length > 0) {
    console.log("ERROR !!!");
    console.log(error);
  } else {
    console.log(newProduct.getInfomation());
  }
});

const loadedProducts = plainToClass(Product, products);

for (const prod of loadedProducts) {
  console.log(prod);
}
