// 对象是一组"键值对"的集合,是一种无序的复合数据集合
var obj = {
    foo: 'Hello',
    bar: 'World'
};

// 键名都是字符串,所以加不加引号都可以
console.log(obj); // { foo: 'Hello', bar: 'World' }

// 如果键名为数字,会被自动转为字符串
var obj1 = {
    1: 'a'
};
console.log(obj1);  // { '1': 'a' }


// 如果键名不符合标识符规则,则必须要加上引号
// var wrongobj = {
//     1p: 'value'
// };

var obj2 = {
    '1p': 'value'
};
console.log(obj2); // { '1p': 'value' }

// 如果一个属性的值是函数,通常把这个属性称为方法
var obj3 = {
    p: function (x) {
        return x * 2;
    }
};
console.log(obj3.p(3)); // 6

// 属性可以动态创建,不一定在对象声明时就指定
var objx = {};
objx.p = 2;
objx.x = 'x';
console.log(objx); // { p: 2, x: 'x' }

// 对象的链式引用
var x1 = {};
var x2 = { bar: 'bar' }
x1.foo = x2;
console.log(x1.foo.bar); // bar


// 对象的引用是地址引用
var o1 = {};
var o2 = o1;
o1.p = 'o1p';
console.log(o2); // { p: 'o1p' }
o2.q = 'o2q';
console.log(o1); // { p: 'o1p', q: 'o2q' }

// 原始类型的引用是值拷贝
var x = 1;
var y = x;
x = 2;
console.log(y);



// 对象采用大括号,这导致一个问题:如果首行是一个大括号,它到底是表达式还是语句?
// 如果是表达式的话,下面就表示一个有foo属性的对象
// 如果表示语句的话,则表示代码区块,里面有一个标签foo,指向表达式123
{ foo: 123 }
// js引擎,遇到这种无法区分表达式跟语句的情况,一律按照代码块进行处理,所以下面的一句话是有输出的.
{ console.log(123); } // 123

// 如果想要解释成对象,那需要加上圆括号。因为圆括号里面,只能是表达式,以确保大括号只能解释成对象
({ foo: 123 }) // 真确
// ({console.log(123)}) // 错误
eval('{foo: 123}') // 123
eval('({foo: 123})') // {foo: 123}