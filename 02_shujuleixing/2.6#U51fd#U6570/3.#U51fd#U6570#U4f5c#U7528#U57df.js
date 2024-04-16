/**
 * es5中只有两种作用域
 *  1.全局作用域,变量在整个程序中一直存在,所有地方都可以读取
 *  2.函数作用域,变量只在函数内部存在
 *  3.块级作用域(es6新增)
 */

// 函数可以读取全局变量
// 函数内的变量无法被外部读取
// function f() {
//     var v = 1;
// }
// v // v is not defined

// 在函数内部,局部变量v覆盖了全局变量v
// var v = 1;
// function f() {
//     var v = 2;
//     console.log(v);
// }
// f(); // 2

// 函数内部的变量也会提升,提升到函数体的头部

/** 
 * 函数本身也有作用域。它的作用域与变量一样,就是其声明时所在的作用域,与其运行时所在的作用域无关。
 */
// var a = 1;
// var x = function () {
//     console.log(a);
// };

// function f() {
//     var a = 2;
//     x();
// }
// f() // 1


// 函数B调用函数A,但是函数A并不会引用函数B中的变量
var x = function () {
    console.log(a);
};

function y(f) {
    var a = 2;
    f();
}

y(x); //  a is not defined