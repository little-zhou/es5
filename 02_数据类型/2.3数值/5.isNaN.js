const log = console.log;

// isNaN方法可以用来判断一个值是否为NaN
log(isNaN(NaN)); // true 
log(isNaN(123)); // false

// isNaN只对数值有效,传入其他值先转为数值。所以isNaN为true有可能不是NaN,也可能是字符串。
log(isNaN('hello')); // true
// 相当于
log(isNaN(Number('hello'))); // true
// 同样的对于对象跟数组也是这样
log(isNaN(['abc']));
log(isNaN({})); // true

log(isNaN([])); // false
log(isNaN(['123'])); // false
log(isNaN([123])); // false
log(Number([123, 456])); // NaN
log([1,2,3].toString()); // 1,2,3
log([1].toString()); // 1


// 判断isNaN最好是利用NaN是唯一一个不等于自身的值这个特点,(毕竟isNaN为true值不一定是NaN,还可能是字符串)
function MyIsNaN(value) {
    return value !== value;
}
