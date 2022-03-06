var CQueue = function() {
    // 双栈实现队列的意思就是保证栈的特性不可以使用shift()
    // 只能通过 push() 和 pop() 实现
    this.stack1 = [];
    this.stack2 = [];
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
    // stack1仅用于存储append的值，实际操作的是stack2
    this.stack1.push(value);
    return null;
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
    // 两个栈都空了，既没有存储的栈，也没有正在操作的栈才返回 -1
    if(!(this.stack1.length||this.stack2.length)) return -1;
    // 当stack2空了，即正在操作的栈空了，再从存储栈取值去操作栈
    if(!this.stack2.length) {
        // 这样才可以保证队列的特性: 先进先出
        while(this.stack1.length) {
            let val = this.stack1.pop();
            this.stack2.push(val);
        }
    }
    return this.stack2.pop();
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */