# 1.数据类型概述
ES5只有6种数据类型(ES6新增Symbol和BigInt类型)<br>
数值(number):&emsp; 整数和小数(1和3.14)<br>
字符串(string): &emsp;文本(hello)<br>
布尔值(boolean): &emsp;表示真假(true and false)<br>
undefined:&emsp;表示未定义或者不存在 <br>
null:&emsp; 表示空值，即此处的值为空。<br>
对象(object):&emsp;各种值的集合<br>
前三个称为原始类型。对象称为合成类型。<br>
对象又可以分三个子类型:&emsp;狭义的对象(object)、数组(array)、函数(function) <br>
# 2.typeof运算符
```
typeof 1; // number
typeof '1'; // string
typeof true; // boolean
typeof undefined; // undefined
typeof {}; // object
typeof []; // object
typeof function f(){}; // function

console.log(typeof null); // object 历史遗留问题

v // v is not defined 没有定义直接报错
typeof v // undefined 

// 所以以下是错误写法
if(v){}

// 正确写法
if(typeof v==="undefined"){}
```