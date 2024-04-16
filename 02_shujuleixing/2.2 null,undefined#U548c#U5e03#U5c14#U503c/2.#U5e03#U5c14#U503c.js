// js预期某个位置应该是bool值,会将该位置上现有的值自动转为bool值。
// 转换规则是除了以下6个值会被转为false(null、undefined、false、0、NaN、空字符串)，其他值都会被视为true

if ([]) {
    console.log('[]是true');
}
// []是true


if ({}) {
    console.log('{}是true');
}
// {}是true