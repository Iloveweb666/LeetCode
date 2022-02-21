/**
 * @param {string} s
 * @return
 */
var longestPalindrome = function (s) {
  const sArr = s.split('');
  let list = [];
  // if (sArr.length === 1) {
  //   return s;
  // } else if (sArr.length === 2) {
  //   if (sArr[0] !== sArr[1]) {
  //     return sArr[0];
  //   } else {
  //     return sArr[0] + sArr[1];
  //   }
  // } else {
  //   for (let i = 1; i < sArr.length; i++) {
  //     let copyArr = JSON.parse(JSON.stringify(sArr));

  //     let preIndex = i;
  //     while (copyArr[preIndex - 1] && copyArr[preIndex] === copyArr[preIndex - 1]) {
  //       preIndex--;
  //     }
  //     let pre = preIndex - 1;

  //     let nextIndex = i;
  //     while (copyArr[nextIndex + 1] && copyArr[nextIndex] === copyArr[nextIndex + 1]) {
  //       nextIndex++;
  //     }
  //     let next = nextIndex + 1;
  //     while (pre > -1) {
  //       if (copyArr[pre] === copyArr[next]) {
  //         pre--;
  //         next++;
  //       } else {
  //         break;
  //       }
  //     }
  //     pre++;
  //     next--;
  //     const currentList = copyArr.splice(pre, next - pre + 1);
  //     if (currentList.length > list.length) {
  //       list = currentList;
  //     }
  //   }
    return list.join('');
  }
};

console.log(longestPalindrome('ccccab'));
