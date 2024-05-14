let products = [
    { name: "Smartphone", brand: "Samsung", price: 799.99 },
    { name: "Laptop", brand: "Apple", price: 1299.99 },
    { name: "Headphones", brand: "Sony", price: 149.99 },
    { name: "Smartwatch", brand: "Fitbit", price: 199.99 },
    { name: "Bluetooth Speaker", brand: "JBL", price: 79.99 },
  ];
  
  // Question:

// 1. Use map() to create an array of product prices.

let productPrice = products.map(product => product.price);

console.log(productPrice)

// 2. Use forEach() to display the details (name, brand, price) of each product.

let productDetail = products.forEach(product =>(
    console.log(`Name: ${product.name}, Brand: ${product.brand}, Price: ${product.price}`)

));
console.log(productDetail)

// 3. Use map() to create an array of product names in uppercase.

let productNameUpperCase = products.map(product => (product.name).toUpperCase());
console.log(productNameUpperCase)

// 4. Use forEach() to update the prices of each product by adding 10%.
let updatePrice10Persent = products.forEach(product => {
    let update  = ((product.price * 0.10) + product.price).toFixed(2);
    
    console.log(update)
   
    
});

// 5. Use map() to create an array of product objects with only the brand and price properties.

let brandAndPrice = products.map(product => ({brand: product.brand, price: product.price}))

console.log(brandAndPrice)
