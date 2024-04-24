// function Cat(name, age) {
//     this.name = name;
//     this.age = age;

//     function miao() {
//         console.log(`喵喵叫`);
//     }

//     this.meow = () => {
//         console.log('喵喵');
//     }
// }

// var cat1 = new Cat('小黑', 15);
// var cat2 = new Cat('小白', 16);
// // console.log(cat1.miao === cat2.miao); // true 都是undefined,因为都没有在实例上面进行挂载。
// console.log(cat1.meow === cat2.meow); // false

// function f() {}
// console.log(f.prototype)
// console.log(typeof f.prototype)

// function Animal(name) {
//     this.name = name;
// }
// Animal.prototype.color = 'white'
// var a1 = new Animal('cat1');
// var a2 = new Animal('cat2');
// console.log(a1.color);
// console.log(a2.color);

// console.log(Object.getPrototypeOf(Object.prototype)); // null

// function Test() {}
// Test.prototype = new Array();
// Test.prototype.constructor = Test;

// var mine = new Test();
// mine.push(1,2,3);
// console.log(mine.length); // 3
// console.log(mine instanceof Array); // true

// function Foo() {}
// console.log(Foo.prototype.constructor === Foo); // true
// var foo = new Foo();
// console.log(foo.constructor == Foo); // true
// console.log(foo.constructor == Foo.prototype.constructor); // true
// console.log(foo.hasOwnProperty('constructor')); // false

// function Shape() {
//   this.x = 0;
//   this.y = 0;
// }

// Shape.prototype.move = function(x, y) {
//   this.x += x;
//   this.y += y;
//   console.info('Shape moved.');
// };

// // 第一步,子类继承父类的实例
// function Rectangle() {
//     Shape.call(this); // 调用父类的构造函数
// }

// // 第二步,子类继承父类的原型
// // 必须要用Object.create否则父类的原型Shape.prototype也会被改掉
// Rectangle.prototype = Object.create(Shape.prototype);
// Rectangle.prototype.constructor = Rectangle;

// var rect = new Rectangle();
// console.log(rect instanceof Shape); // true
// console.log(rect instanceof Rectangle); // true

// ClassB.prototype.print = function() {
//   ClassA.prototype.print.call(this);
//   // some code
// }


// function M1() {
//   this.hello = 'hello';
//   this.sayHello = function() {
//     console.log('---hello---');
//   }
// }

// function M2() {
//   this.world = 'world';
//   this.sayWorld = function() {
//     console.log('---world---');
//   }
// }

// function S() {
//   // 调用父类的构造函数
//   M1.call(this);
//   M2.call(this);
// }

// var s = new S();
// console.log(s.hello); // hello 
// console.log(s.world); // world

// // 继承M1
// S.prototype = Object.create(M1.prototype);
// // 继承链上加入M2
// Object.assign(S.prototype, M2.prototype);

// // 指定构造函数
// S.prototype.constructor = S;

// var s1 = new S();
// s1.sayHello();
// s1.sayWorld();


// var module = (function() {
//   var _count = 0;
//   var m1 = function() { return 1 };
//   var m2 = function() {};
//   return {
//     m1: m1,
//     m2: m2
//   };
// })();
// // 读取不到内部的_count变量。
// console.log(module._count); // undefined
// console.log(module.m1()); // 1


// var module = (function(mod) {
//   mod.m3 = function() {
//     console.log('m3');
//   };
//   return mod;
// })(module);
// module.m3(); // m3

// var module = (function(mod) {
//   // ...
// })(window.module || {});

console.log(undefined || {});