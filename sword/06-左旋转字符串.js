/**
 * @param {string} s
 * @param {number} n (1 <= n < s.length <= 10000v)
 * @return {string}
 */
var reverseLeftWords = function (s, n) {
  let newS = s.split("");
  let spliceS = newS.splice(0, n);
  return newS.concat(spliceS).join("");
};

console.log(reverseLeftWords("abcdefg", 2));
