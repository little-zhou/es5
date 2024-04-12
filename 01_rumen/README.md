# 1.什么是JavaScript语言
&nbsp;&nbsp;JavaScrit是一种轻量级脚本语言。所谓脚本语言，是指它不具备开发操作系统的能力，而是用来编写控制其他大型应用程序的"脚本"。
# 2.JavaScript和ECMAScript的关系
ECMAScrip是标准，JavaScript是其中一种实现。
# 3.语句与表达式
语句是指为了完成任务而进行的操作,下面的是一条赋值语句
```
var a = 1 + 3;
```
`1 + 3`叫表达式，表达式返回一个值。<br />
表达式一般返回值，而语句一般不需要，这就是他们的区别。
# 4.变量提升
```
console.log(a); //undefined
var a = 1;
```
&nbsp;&nbsp;js引擎先解析代码获取所有被声明的变量,然后再一行一行地运行。所以所有变量的声明都会被提升到代码的头部,这就叫做变量的提升。<br/>
上面的代码就相当于下面的
```
var a;
console.log(a);
a = 1;
```
# 5.标识符
第一个字符:  `字母、_、$`<br>
后面的字符:  `字母、_、$、0-9`
# 6.区块
```
{
    var a = 1;
}
console.log(a); //1
```
var区块不构成单独作用域,但是let会构成单独作用域
```
{
    let a = 1;
}
console.log(a); //ReferenceError: a is not defined
```
# 7.switch结构
```
var x = 1;

switch(x){
    case true:
        console.log('类型发生转变');
        break;
    default:
        console.log('类型没有发生改变');
}

// 类型没有发生改变
```
switch语句后面的表达式，与case语句后面的表达式比较结果时，采用的是严格相等运算符(===),而不是相等运算符(==),这意味着比较时不会发生`类型转换`
# 8.三元运算符 ?:
```
（条件） ？ 表达式1 ：表达式2
```
如果条件为true返回`表达式1`的值，否则返回`表达式2`的值
```
var even = (x % 2 === 0) ? true : false
```
如果x为偶数返回true否则返回false
# 9.for循环
```
for (初始化表达式; 条件; 递增表达式) {
    语句
}
```
`初始化表达式`: 确定循环变量的初始值,只在循环开始时运行一次。<br/>
`条件表达式`: 每轮循环开始时,都要执行这个表达式,只有值为真时，才会继续循环。<br/>
`递增表达式`:每轮循环的最后一个操作,通常用来递增循环变量。
```
for (var i = 0; i < 100; i++) {
    console.log(i);
}

// 无限循环
for (;;) {
    console.log('Hello World.')
}
```
# 10.标签
&nbsp;&nbsp;JS语言允许,语句的前面有标签(label),相当于定位符,用于跳转到程序的任意位置,标签的格式如下。
```
// 只跳出本层循环
for (var i =0; i<3;i++) {
    for (var j = 0;j<3;j++){
        if (i ===1 && j ===1){
            break;
        }
        console.log(`i--:${i}, j----:${j}`)t
    }
}
```

默认break只能跳出本层(内层)循环,但是使用label可以跳出指定循环(双层循环)。
```
// 跳出双层循环
top:
    for (var i =0; i<3;i++) {
        for (var j = 0;j<3;j++){
            if (i ===1 && j ===1){
                break top;
            }
            console.log(`i--:${i}, j----:${j}`)
        }
    }
```
