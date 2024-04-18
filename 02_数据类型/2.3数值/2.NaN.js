const log = console.log

// NaN表示"非数字",主要出现在字符串解析成数字出错的场合。
log(5 - 'x'); // NaN
log(0 / 0); // NaN

// NaN是一个特殊的数值
log(typeof NaN); // number

// NaN不等于任何数(包括它自己)
log(NaN === NaN); // false