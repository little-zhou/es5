/**
 *  闭包: 出于种种原因我们需要得到函数内部的局部变量,正常情况下是不行,但是我们可以在函数内部再定义一个函数,然后将内部函数返回,
 *       就可以拿到外层函数的内部变量了
 *      
 */
function f1() {
    var n = 999;
    function f2() {
        console.log(n);
    }
    return f2;
}

var result = f1();
result(); // 999

// 闭包的好处 1.读取外层函数的内部变量 2.让这些变量始终保持在内存中,即闭包可以使得它的诞生环境一直存在。
function createIncrement(start) {
    return function() {
        return start++;
    };
}
var inc = createIncrement(5);
console.log(inc()); // 5
console.log(inc()); // 6
console.log(inc()); // 7
console.log(inc()); // 8

/**
 *  立即调用函数表达式(IIFE)
 */
(function(){

})();