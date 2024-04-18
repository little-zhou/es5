# 1.this关键字的含义
前面已经提到,this可以用在构造函数,表示当前实例对象。当然,它还可以用在其他地方。但是不管在什么场合,this都有一个共同的点:*它总是返回一个对象*
简而言之,this就代表属性或者方法"当前"所在的对象.

由于属性可以赋值给另外的变量,所以属性所在的变量是可变的。
```
var obj = {
    name: '张三',
    f: function() {
        console.log(`hello, ${this.name}`)
    }
}
obj.f(); // hello, 张三

var func = obj.f;
func(); // hello, undefined
```

1. this的绑定跟定义的位置(编写的位置)没有关系
2. this的绑定和调用方式以及调用位置有关系
3. this是在运行时被绑定的

# 2.实质
属性的值可能是一个函数,这时函数的运行环境就有多种可能,一种是直接调用(默认this指向window),还有一种就是对象调用,这时候this就会指向对象。主要还是因为函数的执行环境不一样。

```
// f2相当于函数的直接调用,所以f2函数里面的this当然为window，请记住函数中的this跟函数所在的位置没有关系,只跟函数的调用方式有关!
var o = {
    f1: function() {
        console.log(this);
        // var that = this; // 解决方案
        var f2 = function() {
            console.log(this);
        }();
    }
}
o.f1();
// object
// window
```
// 绑定this的三种方法
- call func.call(thisValue, arg1, arg2, arg2, ...)
- apply func.appply(thisValue, [arg1, arg2, ...])
- bind func.apply(thisValue) // 每次返回一个新对象


