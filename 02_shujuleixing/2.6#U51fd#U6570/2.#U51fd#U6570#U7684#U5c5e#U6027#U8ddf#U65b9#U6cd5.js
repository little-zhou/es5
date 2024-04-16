/**
 * 1.name属性获取函数的名字
 * 2.length属性返回函数预期传入的参数个数
 * 3.toString()返回一个字符串,内容是函数的源码
 */
var myFunc = function () {};
function test(f) {
    console.log(f.name);
}
// 获取函数的名字
test(myFunc); // myFunc


function f(a, b, c) {}
// 函数f预期传入3个参数
console.log(f.length); // 3

function f1(a, b) {console.log('123') };
console.log(f1.toString()); // function f1(a, b) {console.log('123') }