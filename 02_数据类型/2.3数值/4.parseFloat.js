const log = console.log

// parseFloat用于将字符串转为浮点数
log(parseFloat('3.14')); // 3.14

// 如果字符串符合科学计数法,则会进行相应转换
log(parseFloat('314e-2'));
log(parseFloat('0.0314e+2'));

// 如果字符串包含不能转为浮点数的字符,则不再进行往后转换,返回已经转好的部分
log(parseFloat('3.14abcdefg'));

// 忽略空格
log(parseFloat(' 3.14  '));


// 如果不是字符串先转字符串再转换
log(parseFloat([2.68]));

// 字符串第一个字符不能转浮点数,返回NaN
log(parseFloat([])); // NaN
log(parseFloat('FF2')); // NaN
log(parseFloat('')); // NaN


// parseFloat不同于Number
log(parseFloat(true)); // NaN
log(Number(true)); // 1

log(parseFloat(null)); // NaN
log(Number(null)); // 0

log(parseFloat('')); // NaN
log(Number('')); // 0

log(parseFloat('123.45#')); // 123.45
log(Number('123.45#')); // NaN

