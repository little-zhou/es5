const log = console.log;

/** 
 * 函数声明的三种方法
 *  1.function关键字
 *  2.函数表达式
 *  3.Function构造函数声明(基本不用)
 * 
 * 同一个函数被多次声明,后面的声明就会覆盖前面的声明(函数名的提升使前一次声明的函数在任何时候都是无效的)
 */
function func (x) { console.log(x) };

// 2.函数表达式声明函数时,function命令后面不带函数名。但是结尾需要加;表示语句结束。
var func = function () {};
// 如果带函数名,该函数名只在函数体中生效,在函数体外无效
var func = function x () {
    console.log(x.name);
};
func(); // x
// console.log(x.name); // x is not defined

// 3.使用构造函数声明
var foo = new Function(
    'return "Hello world";'  
);
console.log(foo());

// 等于
function foo() {
    return 'Hello world';
}


// 利用函数的递归实现斐波那契数列
function fib(num) {
    if (num === 0) return 0;
    if (num === 1) return 1;
    return fib(num - 1) + fib(num - 2);
}

log(fib(6)); // 8


/** 
 * 函数是第一等公民
 *  js语言将函数看作一种值,与其他值(数值、字符串、布尔等)地位相同。凡是可以用到值的地方,就能够使用函数。
 *  比如,可以把函数赋值给变量和对象的属性,也可以当做参数传入其他函数,或者作为函数的返回结果。函数只是一个可以执行的值,此外并无特殊之处。
 * 
 * 由于函数与其他数据类型地位平等,所以在js语言中函数又被称为一等公民。
 */
// 函数可以被赋值给变量
function add(x, y) {
    return x + y;
}

// 把函数赋值给一个变量
var operator = add;
log(operator(1, 3)); // 4

// 将函数作为参数传递给另外一个函数
function a(op) {
    return op;
}
log(a(add)(4,5)); // 9


/** 
 *  函数名的提升
 *      1.js引擎将函数名视同变量名,所以采用function声明函数时,整个函数会像变量声明一样,被提升到代码头部。      
 */
// 由于变量提升,函数的声明被提升到了代码头部,在调用之前就已经被声明过了
f(); // 函数被调用了.
function f() {
    console.log('函数被调用了.');
}

// 但是如果采用函数表达式的方式定义函数,就会报错
f1();
var f1 = function() {
    console.log('匿名函数.');
}
// 相当于以下代码
var f1;
f1();
f1 = function() {
    console.log('匿名函数.');
}