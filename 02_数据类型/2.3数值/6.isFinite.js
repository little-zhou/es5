const log = console.log;

// isFinite返回一个布尔值,用来判断某个值是不是正常的数值
log(isFinite(Infinity)); // false
log(isFinite(-Infinity)); // false
log(isFinite(NaN)); // false
log(isFinite(undefined)); // false
log(isFinite(null)); // true
log(isFinite(-1)); // true