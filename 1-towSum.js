const nums = [3,3], target = 6;
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//算法复杂度 o(n²) 双重for循环，简单粗暴
// var twoSum = function(nums, target) {
//     for(let i = 0;i<nums.length;i++){
//         for(let j = i+1;j< nums.length;j++){
//             if(nums[i] + nums[j] === target){
//                 return [i,j];
//             }
//         }
//     }
// };

//算法复杂度 o(n) 设定目标数组比对
// var twoSum = function(nums, target) {
//     const targetNums = [];
//     for(let i = 0;i<nums.length;++i){
//         targetNums.push(target - nums[i])
//     }
//     for(let i = 0;i<nums.length;++i){
//         const index = targetNums.indexOf(nums[i]);
//         if(index !== -1 && index !== i){
//             return [Math.min(index, i),Math.max(index, i)]
//         }
//     }
// };

//算法复杂度 o(n) map对象存储
var twoSum = function(nums, target) {
    map = new Map();
    for(let i = 0; i < nums.length; i++) {
        x = target - nums[i];
        if(map.has(x)) {
            return [map.get(x),i];
        }
        map.set(nums[i],i);
    }
};

let arr = twoSum(nums, target);
console.log(arr);