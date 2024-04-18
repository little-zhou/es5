// eval命令接受一个字符串作为参数,并将这个字符串当做语句执行
eval('var a = 1;');
console.log(a); // 1

// eval没有自己的作用域,都在当前作用域内执行,因此可能会修改当前作用域变量的值,造成安全问题
var b = 1;
eval('var b = 123');
console.log(b); // 123