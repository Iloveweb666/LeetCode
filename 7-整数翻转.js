/**
 * @param {number} x
 * @return {number}
 */
// var reverse = function (x) {
//     let n = 0;
//     while (x != 0) {
//         n = n * 10 + x % 10;
//         x = Math.floor(x / 10);
//     }
//     return n ? n : 0;
// };

var reverse = function (num) {
    var flag = num > 0,
        newValue = 0;
    !flag && (num = -num);
    while (num > 0) {
        newValue = newValue * 10 + num % 10;
        num = Math.floor(num / 10);
    }!flag && (newValue = -newValue);
    return (newValue > Math.pow(2, 31) - 1 || newValue < Math.pow(2, 31) * -1) ?
        0 :
        newValue;
}

console.log(reverse(-9876));