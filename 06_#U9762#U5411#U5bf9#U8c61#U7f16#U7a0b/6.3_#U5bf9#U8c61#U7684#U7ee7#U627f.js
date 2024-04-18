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

function Foo() {}
console.log(Foo.prototype.constructor === Foo); // true
var foo = new Foo();
console.log(foo.constructor == Foo); // true
console.log(foo.constructor == Foo.prototype.constructor); // true
console.log(foo.hasOwnProperty('constructor')); // false

