// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。

/**
 * @param {string} s
 * @return {number}
 */

const s = 'abcad';

//方法一 遍历字符串 每次存储最长子串 返回它的length
var lengthOfLongestSubstring = function (s) {
    if (s.length == 0) return 0;
    let substringArr = []; //存储非重复字符串的数组
    let maxLength = 0; //最长子串长度
    const orginArr = s.split(''); //分割字符串
    for (let i = 0; i < orginArr.length; ++i) {
        const index = substringArr.indexOf(orginArr[i]);
        console.log('index', index);
        if (substringArr.length > 0 && index !== -1) {
            substringArr = substringArr.splice(index + 1, substringArr.length - index - 1);
        }
        substringArr.push(orginArr[i]);
        console.log('substringArr', substringArr);
        maxLength = Math.max(maxLength, substringArr.length);
    }
    return maxLength
};

//方法二(内存占用低)  动态规划，待理解
var lengthOfLongestSubstring = function (s) {
    if (s.length == 0) return 0;
    let dp = 1;
    let rlt = 1;
    for (let i = 1; i < s.length; ++i) {
        let end = i - dp;
        ++dp; //得到最大边界
        for (let j = i - 1; j >= end; --j) {
            if (s[i] == s[j]) {
                dp = i - j;
                break;
            }
        }
        rlt = Math.max(rlt, dp);
    }
    return rlt;
}
const maxLength = lengthOfLongestSubstring(s);
console.log(maxLength);