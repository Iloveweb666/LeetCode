/**
 * @param {string} s
 * @return {string}
 * 输入一个英文句子，翻转句子中单词的顺序，但单词内字符的顺序不变。为简单起见，标点符号和普通字母一样处理。
 * 例如输入字符串"I am a student. "，则输出"student. a am I"。
 */
// 双指针
var reverseWords = function (s) {
  let left = 0,
    right = 0;
  let word = "",
    arr = [];
  while (right < s.length) {
    while (s[left] == " " && right < s.length) {
      left++;
      right++;
    }
    if (right == s.length) {
      break;
    }
    while (s[right] != " " && right < s.length) {
      right++;
    }
    word = s.slice(left, right);
    arr.unshift(word);
    left = right;
    if (right == s.length) {
      break;
    }
  }
  return arr.join(" ");
};
