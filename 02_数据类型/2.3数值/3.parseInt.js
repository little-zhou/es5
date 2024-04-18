const log = console.log;

// parseInt用于将字符串转为整数
log(parseInt('123')); // 123
// 自动去除空格
log(parseInt('     123    '));

// 如果parseInt的参数不是字符串,则会先转成字符串再转换
log(parseInt(1.23)); // 1
// 等同于 
log(parseInt('1.23')); // 1


// 字符串转整数的时候是一个字符一个字符依次转换,如果遇到不能转数字的字符,就不能进行下去了
log(parseInt('123*****')); // 123
// 如果字符串第一个字符没法转为数字(正负号除外),直接返回NaN
log(parseInt('a10')); // NaN
log(parseInt('+2')); // 2
log(parseInt('-3')); // -3


// 以0x开头的当16进制数解析
log(parseInt('0x15')); // 21
// 以0开头的当10进制解析
log(parseInt('08976')); // 8976


// 对于科学计数法的数字,parseInt会将科学计数法表示为字符串,结果很奇怪
log(parseInt(1000000000000000000000.5)); // 1
// 相当于
log(parseInt('1e+21')); // 1

log(parseInt(0.000000000008)); // 8
// 相当于
log(parseInt('8e-12')); // 8


// parseInt参数不是字符串会先转成字符串"9"，然后转成二进制直接是NaN
// 这是因为8进制: 有前缀0o或0O的数值,或者有签到0、且只用到0-7的八个阿拉伯数字的数值
log(parseInt(011, 2)); // NaN

log(parseInt([12345])); // 12345
