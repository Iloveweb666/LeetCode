/**
 * initialize your data structure here.
 */
var MinStack = function () {
  // 利用双栈stack存所有push数、minStack存最小数
  // 由于stack是栈的特新，minStack的栈顶永远是最小值
  // 只需要在stack弹栈后刷新minStack栈顶
  this.stack = [];
  this.minStack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.stack.push(x);
  if (!this.minStack.length || this.minStack[this.minStack.length - 1] >= x) {
    this.minStack.push(x);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  let val = this.stack.pop();
  if (val != undefined && val === this.minStack[this.minStack.length - 1]) {
    this.minStack.pop();
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.min = function () {
  return this.minStack[this.minStack.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */

var obj = new MinStack();
obj.push(2);
console.log(obj);
obj.push(0);
console.log(obj);
obj.push(3);
console.log(obj);
obj.push(0);
console.log(obj);
let a = obj.min();
console.log(a);
obj.pop();
console.log(obj);
let b = obj.min();
console.log(b);
obj.pop();
obj.min();
obj.pop();
obj.min();

// 很喜欢另一个解法
// 只用一個棧存值與最小值
class MinStack {
  constructor() {
    this.stack = [];
  }
  push(x) {
    this.stack.push({
      val: x,
      min: this.stack.length ? Math.min(x, this.min()) : x,
    });
  }
  pop() {
    this.stack.pop();
  }
  top() {
    return this.stack[this.stack.length - 1].val;
  }
  min() {
    return this.stack[this.stack.length - 1].min;
  }
}
