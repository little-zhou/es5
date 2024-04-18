// 面向对象编程 (Object Oriented Programming, oop) 1.对象是单个实物的抽象 2.对象是一个容器,封装了属性和方法(属性是对象的状态,方法是对象的行为)
/**
 * 典型面向对象的语言(c++和java),都有"类"这个概念，所谓"类"就是对象的模板,用来生成对象。
 * js里面没有类这个概念,而是基于构造函数(constructor)和原型链(prototype)
 * js中使用构造函数作为对象的模板,描述对象的基本结构。一个构造函数可以生成多个实例对象,这些对象拥有相同的结构。
 */

/**
 * 构造函数就是一个普通的函数（但是首字母大写）
 * 特点:
 *  1.构造函数内部使用this代表所要生成的对象实例
 *  2.生成对象使用new关键字
 */ 
var Vehicle = function() {
    // 'use strict';  // Cannot set property 'price' of undefined
    this.price = 100;
};
var v = new Vehicle();
console.log(v.price); // 100

// 如果忘了使用new关键字来创建对象的话,这时候构造函数会相当于普通函数,并且构造函数中的this会指向全局。
var v1 = Vehicle();
console.log(v1); // undefined
console.log(price); // 100

// 解决方案是1.使用严格模式,在严格模式下,this不能指向全局,默认是undefined 2.是在构造函数中进行判断是否使用new命令创建,如果没有的话直接返回一个实例对象
var Vehicle2 = function() {
    if (!(this instanceof Vehicle2)) {
        return new Vehicle2();
    }
    this.price = 200;
}
var v3 = Vehicle2;
// 不是传参数的话新对象没有price属性
console.log(v3.price); // undefined


/**
 * new 命令的原理
 *  1.创建一个空对象,作为将要返回的对象实例
 *  2.将这个空对象的原型,指向构造函数的prototype属性
 *  3.将这个空对象赋值给构造函数内部的this关键字
 *  4.开始执行构造函数内部的代码
 */

//如果构造函数里面有return语句,并且return后面跟着的是一个对象,则new命令返回的就是这个对象;否则,就会不管return语句,返回this对象
var obj = {'a': 1}
var Car = function() {
    this.name = 'BAOMA';
    // return 1000；
    return obj;
}
console.log((new Car()) === 1000); // false
console.log((new Car()) === obj); // true

// 对于普通函数使用new命令会返回一个空对象
function normal() {
    return 'normal function';
}
console.log(new normal()); // {}
console.log(typeof new normal()); // object


/**
 * 模拟new命令的执行过程
 */
function _new(/**构造函数 */ constructor, /**参数 */ params) {
    // 取出所有参数
    var args = [].slice.call(arguments);
    // 取出构造函数
    var constructor = args.shift();
    // 1.创建一个空对象,继承构造函数的prototype属性
    var context = Object.create(constructor.prototype);

    var result = constructor.apply(context, args);
   
    return (typeof result === 'object' && result != null) ? result : context;
}


/**
 * new.target属性可以在函数内部使用。如果当前函数是new命令调用,new.target就是指向当前函数,否则为undefined
 * 
 */
function f() {
    console.log(new.target === f);
}

f(); // false
new f(); // true


