// in用来检查对象是否包含某个属性,包含就返回true，不包含返回false
/**
 * 1.只遍历对象身上的可遍历属性,跳过不可遍历属性。
 * 2.它不仅会遍历对象自身的属性,还会遍历继承的属性。
 */
var obj = { p: 1 };
console.log('p' in obj); // true
// in会把继承的属性也显示出来
console.log('toString' in obj); // true

// 把继承的属性忽略
if ('toString' in obj) {
    // 通过hasOwnProperty判断一下属性是否是对象本身自有
    console.log(obj.hasOwnProperty('toString')); // false
}


// for...in来遍历对象的全部可遍历属性属性(忽略toString)
var father = { a: 1, b: 2, c: 3 };
for (var i in father) {
    console.log(i);
}
// a
// b
// c
console.log('----------------------------');
var son = Object.create(father);
son.d = 4;
son.e = 5;
// for...in 不仅会遍历对象本身的属性,还会遍历继承下来的可遍历属性
for (var j in son) {
    console.log(j);
}
// d
// e
// a
// b
// c

// 如果需要只遍历对象本身的属性,还需要结合hasOwnProperty方法使用
for (var k in son) {
    if (son.hasOwnProperty(k)) {
        console.log(`key: ${k}`);
    }
}
// key: d
// key: e

// Object.keys方法就是返回对象自身的所有可枚举属性(成功解决上述问题)
console.log(Object.keys(son)); // [ 'd', 'e' ]
