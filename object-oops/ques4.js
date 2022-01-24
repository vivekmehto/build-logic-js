/**
 * Given an array of objects of items in cart, print:

the total No. of items
the total cart value
the total discounted value(sum of dicounted values on each item) based on the given discount
total tax amount (18% tax, calculated on total cart value)
 */

const cartItems = [
  {
    id: "101",
    name: "Oreo",
    count: 2,
    price: 30.0,
    discount: 0.18,
  },
  {
    id: "102",
    name: "Red Bull",
    count: 1,
    price: 99.0,
    discount: 0.15,
  },
  {
    id: "103",
    name: "Dairy Milk Silk",
    count: 3,
    price: 175.0,
    discount: 0.05,
  },
  {
    id: "104",
    name: "Pulse Candy Pack",
    count: 1,
    price: 135.0,
    discount: 0.2,
  },
];

const totalItems = (arr) => {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    let count = arr[i].count;
    total += count;
  }

  console.log(`Total items in cart are : ${total}`);
};

totalItems(cartItems);

const totalCartValue = (arr) => {
  let price = 0;
  for (let i = 0; i < arr.length; i++) {
    let sum = arr[i].price * arr[i].count;
    price += sum;
  }
  console.log(`Total Cart Value is : ${price}`);
  return price;
};

totalCartValue(cartItems);

const totalDiscountedValue = (arr) => {
  let discount = 0;
  for (let i = 0; i < arr.length; i++) {
    let sum = arr[i].discount * 100 * arr[i].count;
    discount += sum;
  }
  console.log(`Total Discount Value is : ${discount}`);
};

totalDiscountedValue(cartItems);

const totalTaxValue = (arr) => {
  let cartValue = totalCartValue(arr);
  let tax = cartValue * 0.18;
  console.log(`Total Tax : ${tax}`);
  return tax;
};

totalTaxValue(cartItems);
