const log = console.log;
var bar = 'foo';
// 对象属性的读取 1.点运算符 2.方括号运算符
var obj = {
    foo: 'foo',
    bar: 'bar'
};
// 使用点运算符,foo就是一个变量
log(obj.foo); // foo
// 方括号里的键名必须要加引号,否则会被当成变量处理
// log(obj[foo]); // foo is not defined
log(obj['foo']);
// bar是一个变量指向foo,下面的代码实际上就是obj['foo']
log(obj[bar]); // foo


// 对于数字键来说
var obj2 = {
    0.5: 'hahah'
};
// 数字键无法使用点运算符(因为会被当做小数点),只能使用方括号运算符
// console.log(obj2.0.5); // wrong
// 数字键可以不加引号,因为会自动转为字符串
console.log(obj2['0.5']); // hahah
console.log(obj2[0.5]); // hahah


var obj3 = {
    key1: 1,
    key2: 2
};
// 获取obj3的可枚举属性
console.log(Object.keys(obj3)); // [ 'key1', 'key2' ]


// 使用delete可以删除对象中的属性,即使对象中没有该属性也不会报错,直接返回true(离大谱),所以不能用来判断某个属性是否存在
// 只有一种情况delete命令返回false,就是该属性存在且不得删除。
var obj4 = Object.defineProperty({}, 'p', {
    value: 666,
    configurable: false
});
log(obj4.p); // 666 
// obj4中属性配置了不可删除,所以delete返回false
log(delete obj4.p); // false
log(obj4.p); // 666 

// 还有一点需要注意,delete只能删除对象本身的属性,无法删除继承的属性。
var father = { p: 888 };
// 以father为原型创建一个方法
var son = Object.create(father);
log(son.p); // 888
log(delete son.p); // true 离大谱,属性没被删除,但是返回true
log(son.p); // 888
log(Object.keys(son)); // []
