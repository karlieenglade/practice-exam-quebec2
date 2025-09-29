const purchases = [
  {
    product: "Ergofit Wired Earbuds",
    category: "Electronics",
    quantity: 2,
    price: 12.99,
    mostLikedReviews: [
      {
        rating: 5,
        text: "Great noise-cancelling feature."
      }
    ]
  },
  {
    product: "LG Bluray Player Replacement Remote Control",
    category: "Electronics",
    quantity: 1,
    price: 6.99,
    mostLikedReviews: [
      {
        rating: 1,
        text: "Product didn't come with batteries."
      },
      {
        rating: 2,
        text: "Package was damaged."
      }
    ]
  },
  {
    product: "McCormick Grill Mates Chipotle Pepper Marinade (12 pk)",
    category: "Grocery",
    quantity: 3,
    price: 15.50,
    mostLikedReviews: [
      {
        rating: 1,
        text: "The marinade packets were damaged."
      }
    ]
  },
  {
    product: "Luxardo Gourmet Cocktail Cherries",
    category: "Grocery",
    quantity: 1,
    price: 24.45,
    mostLikedReviews: [
      {
        rating: 5,
        text: "You can taste the difference between these and marachinos."
      },
      {
        rating: 5,
        text: "I use these all the time for parties."
      }
    ]
  },
  {
    product: "Blood Pressure Monitor",
    category: "Medical Supplies and Equipment",
    quantity: 1,
    price: 49.99,
    mostLikedReviews: [
      {
        rating: 5,
        text: "Matches my blood pressure at the doctor's office."
      }
    ]
  }
];



// #1 // 
//i: object
//o: array of subarrays 
  // each subarray should include the key and value from the object
    // if the value is a number data type.
// do not use Object.keys, Object.values or other object methods
function getNumberEntries(object){
  //array for output
  let output = [];
  for (let key in object){
    //if value is a number
    if (typeof object[key] === "number"){
      //push each key and value into array, as its own array
      output.push([key, object[key]]);
    }
  }
  //return output
  return output;

}



// #2 // 
//i: object, array <additions> of subarrays
      // each subarray is a key and a value to add to <object>
// add each subarray's key and value to <object>
//o: object, updated
const addKeyValuePairs = (object, additions) => {
 //loop over additions 
 for (let i = 0; i < additions.length; i++){
  //at each index [i]make first value [0] key and [1] value 
  object[additions[i][0]] = additions[i][1];
 }
 //return updated object
 return object;
};


//i: array (of purchase objects), a number <price> 
//use native filter method array.filter
//o: new array of items whose price is > <price>
const filterByPrice = (array, price) => {
  //return array of purchase objects who have greater price than <price>
  return array.filter(value => value.price > price);
};

//i: array (of purchase objects)
// use native map method 
//o: new array of strings where each string includes the product's 
      // title uppercased and the most revent review text
          //most recent is last in array 
const mapPurchases = (array) => {
  //title is "product"
  //reviews is mostLikedReviews [{rating: "", text: ""}, {}]
  // add " - Review: "  between the two
  return array.map(value => value.product.toUpperCase() + " - Review: " + value.mostLikedReviews[value.mostLikedReviews.length-1].text);
};



// #5 //
//i: array (of purchase objects)
// use native reduce array.reduce, & at each iteration, 
    // use the purchase's quantity value to grab the corresponding
      // word in the product description and add that to the ouput
        // string (acc) 
          // if purchaes quant is 1, add first word in product descr
const accumulateString = (array) => {
  //setting result of reduce to variable reddy
  let reddy =  array.reduce((acc, cur) => {
    //whatever the value of cur.quantity is,
    //index access for description "product" is cur.quantity - 1 
      // need whole word, not just index (character). split string
      //adding to acc each time
      acc += cur.product.split(" ")[cur.quantity - 1];
      //return acc
    return acc;
  }, ""); //<- seed is string
  return reddy;
};


// #6 //
//i: array (of purchase objects), string <product> of purchase's product description
//use recursion to find matching product and return array
//o: array of object's product description and th category 
    // if no purchase is found matching product description, return 
      // an array with null at the 0 and 1 indexes
const findProduct = (array, product, output=[]) => {
  //base
  //if array.length is 0 (sliced away)
  if (array.length === 0){
    //return output
    return output;
  }
  //recursion
  // if array first value's product is <product>
  if (array[0].product === product){
    //return array of object's product descripton and category
    //push into output array
    output.push(product, array[0].category);
    //else if array.product is not <product>
  }
  // is last or only element in array (lenght is 1)
    // and array's value's product is not <product>
  if (array.length === 1 && array[0].product !== product){
    //make index 0 and 1 of output "null"
    output.push(null, null);
  }
  //return func at array sliced 
  return findProduct(array.slice(1), product, output);
};



// #7 //
//i: array (of purchase objects
//use native filter method
//o: new array of purchases that have a review whose length is > 35
const filterByReviewLength = (array) => {
  // mostLikedReviews is [{rating: "", text: ""}, {}]
  //array is array of objects
    // i need to loop over array and access each one's mostLikedReviews prop
      //mostLikedReviews is an array of objects
        // i need to access each obj in array 's text prop
          //and if text.length > 35 --> pass (add entire object to return array)
 
  //looping over array of purchases
  for (let i = 0; i < array.length; i++){
    //filtering array and returning the purchase objects with reviews text length > 35
    return array.filter(value => value.mostLikedReviews[i].text.length > 35);
  }
}; 







