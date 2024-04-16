/** 
 * 函数参数如果是原始类型的值(数值、字符串、布尔值),传递方式是值传递。
 * 如果函数的参数是数组、对象、函数,传递方式是引用传递,在函数内部修改参数会影响原始值。
 */

// 如果函数中的修改不是修改参数的属性,而是整个替换掉参数,这时不会影响到原始值
var obj = [1,2,3];
function f(o) {
    o = [4,5,6];
    // o.push(5);
}
f(obj);
console.log(obj); // [1,2,3]

/**
 * js允许函数有不定数目的参数,所以需要一种机制在函数内部读取所有机制。所以有了arguments对象。
 */
function f1() {
    console.log(arguments[0]); // 1
    console.log(arguments[1]); // 2
    console.log(arguments[2]); // 3
}
f1(1,2,3)

// 允许在运行时修改arguments参数(严格模式下不允许)
function f2(a, b) {
    // 'use strict';
    arguments[0] = 2;
    arguments[1] = 3;
    return a + b; 
}
console.log(f2(8, 9));

// arguments参数对象是类数组结构,可以转成数组
function f3() {
    var array = Array.prototype.slice.call(arguments);
    console.log(array);
}
f3(1,2,3,4) // [ 1, 2, 3, 4 ]