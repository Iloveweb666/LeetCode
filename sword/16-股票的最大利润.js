/**
 * @param {number[]} prices
 * @return {number}
 * 假设把某股票的价格按照时间先后顺序存储在数组中，请问买卖该股票一次可能获得的最大利润是多少？
 * [7,1,5,3,6,4] => 5
 */
var maxProfit = function (prices) {
  let theMinPrice = Number.MAX_VALUE;
  let theMaxPrice = 0;
  for (let price of prices) {
    theMinPrice = Math.min(theMinPrice, price);
    theMaxPrice = Math.max(price - theMinPrice, theMaxPrice);
  }
  return theMaxPrice;
};
