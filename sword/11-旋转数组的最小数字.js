/**
 * @param {number[]} numbers
 * @return {number}
 * 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。
 * 给你一个可能存在 重复 元素值的数组 numbers ，它原来是一个升序排列的数组，并按上述情形进行了一次旋转。
 * 请返回旋转数组的最小元素。例如，数组 [3,4,5,1,2] 为 [1,2,3,4,5] 的一次旋转，该数组的最小值为1。
 */
var minArray = function (numbers) {
  let right = numbers.length - 1;
  let left = 0;
  let mid;
  // 二分法 中间数比右边的大 -》 在右边； 小 -》 左
  while (left < right) {
    mid = ~~((left + right) / 2);
    if (numbers[mid] < numbers[right]) {
      right = mid;
    } else if (numbers[mid] > numbers[right]) {
      left = mid + 1;
    } else {
      // 跳过（多个）重复元素 right--
      while (numbers[right] === numbers[mid] && right != mid) {
        right--;
      }
    }
  }
  return numbers[left];
};
