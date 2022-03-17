/**
 * @param {number} num
 * @return {number}
 * 给定一个数字，我们按照如下规则把它翻译为字符串：0 翻译成 “a” ，1 翻译成 “b”，……，11 翻译成 “l”，……，25 翻译成 “z”。
 * 一个数字可能有多个翻译。请编程实现一个函数，用来计算一个数字有多少种不同的翻译方法
 */
var translateNum = function (num) {
  // 我的垃圾算法，还没写出来
  // if (num < 10 || (25 < num && num < 100)){
  //     return 1;
  // }
  // if (num < 26) {
  //     return 2;
  // }
  // let s = String(num);
  // let firstTowNum = +(s[0]+s[1])
  // let a = 1;
  // let b = (firstTowNum < 10 || (25 < firstTowNum && firstTowNum < 100)) ? 1 : 2;
  // for (let n = 2;n < s.length; n++){
  //     let cur = +(s[n-1] + s[n]);
  //     if (cur < 26 && cur > 10){
  //         a = a + b;
  //         b = a - b;
  //     } else {
  //         a = a + b - 1;
  //         b = a - b + 1;
  //     }
  // }
  // return a;
  // 大神算法
  num = num.toString();
  let dp = [1];
  for (let i = 1; i < num.length; i++) {
    let d = num[i - 1] > 0 && num[i - 1] + num[i] <= 25 ? dp[i - 2] || 1 : 0;
    dp[i] = dp[i - 1] + d;
  }
  return dp[num.length - 1];
};
