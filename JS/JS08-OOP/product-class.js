/* 
    Crear la clase producto. Atributos encapsulados, crear Setters y Getters
    Utilizar la herencia.
        "id": 2,
        "title": "Mens Casual rts ",
        "price": 22.3,
        "description": "Slies a three-button placket.",
        "category": "men's clothing",
        "image": "https://fakestoreap.jpg",
        "rating": {
            "rate": 4.1,
            "count": 259
        }
*/

/**
 * #id; // readable, not modifiable
 * #object; // readable, not modifiable
 * #price; // readable & modifiable
 * #description; // readable & modifiable
 * #category; // readable & modifiable
 * #image; // readable, not modifiable
 */
class Producto {
    #id; // readable, not modifiable
    #title; // readable, not modifiable
    #price; // readable & modifiable
    #description; // readable & modifiable
    #category; // readable & modifiable
    #image; // readable, not modifiable
  
    constructor(id, title, price, description, category, image) {
      this.#id = id;
      this.#title = title;
      this.#price = price;
      this.#description = description;
      this.#category = category;
      this.#image = image;
    }
  
    get id() {
      return this.#id;
    }
  
    get title() {
      return this.#title;
    }
  
    get price() {
      return this.#price;
    }
  
    set price(newPrice) {
      this.#price = newPrice;
    }
  
    get description() {
      return this.#description;
    }
  
    set description(newDescription) {
      this.#description = newDescription;
    }
  
    get category() {
      return this.#category;
    }
  
    set category(newCategory) {
      this.#category = newCategory
    }
  
    get image() {
      return this.#image;
    }
  
  }
  
  /**
   * #size; // readable, not modifiable
   */
  class Top extends Producto {
  
    #size; // readable, not modifiable
  
    constructor(id, title, price, description, category, image, size) {
  
      super(id, title, price, description, category, image);
  
      this.#size = size;
    }
  
    get size() {
      return this.#size;
    }
  
  }
  
  const tShirtId2 = new Top(
    2,
    "Mens Casual Premium Slim Fit T-Shirts",
    22.3,
    "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    "Men's Clothing",
    "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    ["S", "M", "L", "XL", "2XL", "3XL"],
  )
  
  console.log(tShirtId2);