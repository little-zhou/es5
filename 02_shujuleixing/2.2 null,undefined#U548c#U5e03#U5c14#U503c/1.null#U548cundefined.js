// null和undefined都表示"没有"

// 两者在if中都会转为false
if (!null) {
    console.log('null is false!');
}
// null is false

if (!undefined) {
    console.log('undefined is false!');
}
// undefined is false!

console.log(null == undefined); // true

// 设计之初跟C语言一样,null可以转为数字,自动变为0
console.log(Number(null)); // 0
console.log(Number(null)+1); // 1

// 但是Js设计者认为这样不够,因为null就像在Java里一样,被当成了对象,而且null可以自动转为0,这一点很难被错误处理机制发现。
// 所以又设计了一个undefined加以区别。null表示一个"空"对象,转为数字时是0.undefined表示"此处无定义"的原始值,转为数值时为NaN.
console.log(Number(undefined)); // NaN
console.log(Number(undefined) + 1); // NaN



// 用法和含义
// null表示空值。调用函数时,某个参数未设置任何值,这时候就可以传入null,表示该参数为空。
// eg: 某函数接受引擎抛出的错误作为参数,如果运行过程中未出错,那么这个参数就会传入null表示未发生错误。

// undefined表示"未定义",下面是返回undefined的场景。
// 1. 变量声明但是没有赋值
var i;
console.log(i); // undefined

// 2.调用函数时,该提供的参数没有提供,该参数等于undefined
function f(x) {
    return x;
}
console.log(f()); // undefined

// 3.对象没有赋值的属性
var o = new Object();
console.log(o.p); // undedined

// 4. 函数没有返回值,默认返回undefined
function f2() {}
console.log(f2()); // undefined



