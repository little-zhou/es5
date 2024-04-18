var obj = {
    name: '张三',
    f: function() {
        console.log(`hello, ${this.name}`)
    }
}
obj.f(); // hello, 张三
var func = obj.f;
func(); // hello, undefined



var o = {
    f1: function() {
        console.log(this);
        var f2 = function() {
            console.log(this);
        }();
    }
}
o.f1();