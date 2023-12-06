/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let categorys = [];

  for (let i = 0; i < transactions.length; i++) {
    let isPresent = false;

    if (categorys.length == 0) {
      categorys.push(transactions[i].category);
    } else {
      let isPresent = false;
      for (let z = 0; z < categorys.length; z++) {
        if (transactions[i].category === categorys[z]) {
          isPresent = true;
          break;
        }
      }
      if (isPresent == false) {
        categorys.push(transactions[i].category);
      }
    }
  }

  let price = [];

  for (let i = 0; i < categorys.length; i++) {
    let tprice = 0;
    for (let z = 0; z < transactions.length; z++) {
      if (categorys[i] === transactions[z].category) {
        tprice += transactions[z].price;
      }
    }
    price.push(tprice);
  }

  let fans = [];

  for (let i = 0; i < categorys.length; i++) {
    let obj = {};
    obj["category"] = categorys[i];
    obj["totalSpent"] = price[i];

    fans.push(obj);
  }

  return fans;
}

module.exports = calculateTotalSpentByCategory;
