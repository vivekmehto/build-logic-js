//Given the Cost Price(CP) and Selling Price(SP) of a product. Write a Program to Calculate the Profit or Loss.

const profitLoss = (costPrice, sellingPrice) => {
  if (costPrice - sellingPrice > 0) {
    let loss = costPrice - sellingPrice;
    return `${loss} LOSS`;
  } else if (sellingPrice - costPrice > 0) {
    let profit = sellingPrice - costPrice;
    return `${profit} PROFIT`;
  } else {
    return `NO PROFIT NO LOSS`;
  }
};

profitLoss(1500, 2000);
profitLoss(3125, 1125);
