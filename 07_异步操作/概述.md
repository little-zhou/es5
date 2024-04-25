# 1.单线程模型
- 单线程模型是指js只在一个线程上运行。也就是说js同时只能执行一个任务,其他任务都必须在后面排队等待。
- js只在一个线程上运行并不是Js引擎只有一个线程。其实js引擎有多个线程,单个脚本只在一个线程上运行(也称主线程)。
- 单线程很简单,不用考虑多线程的并发和资源共享问题。坏处是一个脚本如果耗时很长,后面的任务必须排队,就没法执行了。常见的浏览器无响应就是某一段js代码长时间运行,导致整个页面卡在这个地方,其他任务无法执行。
- js语言本身不慢,慢的是读写外部数据,如等待Ajax请求返回结果。
- cpu的速度远高于IO操作(AJAX),如果一直等待IO操作会得不偿失,可以先挂起,执行其他任务,等IO操作结果返回之后再执行。这种就是JS内部采用的"事件循环"机制
- 为了利用cpu的多核性能,html5提出了web worker标准,允许js脚本创建多个线程,但是都受主线程控制,且不得操作DOM。没有改变js单线程本质。
# 2.同步任务和异步任务
同步任务:不会被js引擎挂起、在主线程上排队执行的任务。只有前一个任务执行完毕,才能执行后一个任务。
异步任务:会被js引擎挂起,不进入主线程、而进入任务队列的任务。只有js引擎任务某个异步任务可以执行了(如AJAX请求),才会将该任务才会进入到主线程中执行(以回调形式)。排在异步任务后面的代码不用等异步任务执行完毕就可以执行,也就是异步任务不会阻塞后面的任务执行。
# 3.任务队列和事件循环
js在运行时候除了主线程,引擎还提供了任务队列,里面是各种异步任务。
1. 主线程会去执行所有的同步任务,等同步任务全部执行完之后,会去查看任务队列的异步任务。如果满足条件(也就是异步任务结果返回),就会重新把异步任务加回到主线程执行,这时候它变成同步任务。等执行完毕,下一个异步任务进入主线程,直到所有异步任务执行完毕,程序结束。
2. 引擎是怎么知道异步任务有没有结果,能不能进入主线程?只要同步任务执行完毕,引擎就会去检查那些挂起的异步任务,是不是可以进入主线程。这种循环检查机制就叫做"事件循环"。
# 4.异步操作的模式
## 4.1回调函数
```
function f1() {
  // ...
}

function f2() {
  // ...
}

f1();
f2();
```
如何保证f2函数在f1函数之后运行?如果f1跟f2都是同步任务,这么写程序会顺序执行(f2后于f1执行)。但是如果f1是异步任务,f2会立即执行,不会等到f1结束再执行。
可以把f2写成f1的回调函数的形式,保证f2在f1之后运行。
## 4.2事件监听
异步任务的执行不取决于代码的顺序,而是取决于某事是否发生。
## 4.3发布/订阅
又称为观察者模式
```
JQuery.subscribe('done', f2);

function f1() {
  setTimeout(function () {
    // ...
    JQuery.publish('done');
  },
1000);
}
```
```
class Observable {
    constructor() {
        this.observers = []
    }

    subscribe(func) {
        this.observers.push(func);
    }

    unsubscribe(func) {
        this.observers = this.observers.filter(observer => func !== observer);
    }

    notify(data) {
        this.observers.forEach(observer => observer(data));
    }
}

function f1(data) {
    console.log(`f1 function data-----------: ${data}`);
}

function f2(data) {
    console.log(`f2 function data-----------: ${data}`)
}

var observer = new Observable();
observer.subscribe(f1);
observer.subscribe(f2);

observer.notify('I am a message.');
```
# 5.异步操作的流程控制
```
function final(value) {
    console.log(`complete--------------: ${value}`);
}

function async(arg, callback) {
    console.log(`参数为${arg}, 1秒后返回结果`);
    setTimeout(function () { callback(arg * 2) }, 1000)
}

async(1, function (value) {
    async(2, function (value) {
        async(3, function (value) {
            async(4, function (value) {
                async(5, function (value) {
                    async(6, final);
                });
            });
        });
    });
});
```
## 5.1串行执行
```
var items = [1, 2, 3, 4, 5, 6];
var results = [];

function async(arg, callback) {
    console.log(`参数为${arg}, 1秒后返回结果`);
    setTimeout(function () { callback(arg * 2) }, 1000)
}

function final(value) {
    console.log(`complete--------------: ${value}`);
}

function series(item) {
    if (item) {
        async(item, function (result) {
            results.push(result);
            return series(items.shift());
        });
    } else {
        final(results[results.length - 1]);
    }

}

series(items.shift());
```
## 5.3并行执行
```
var items = [1, 2, 3, 4, 5, 6];
var results = [];

function async(arg, callback) {
    console.log(`参数为${arg}, 1秒后返回结果`);
    setTimeout(function () { callback(arg * 2) }, 1000)
}

function final(value) {
    console.log(`complete--------------: ${value}`);
}

items.forEach(function (item) {
    async(item, function (result) {
        results.push(result);
        if (results.length === items.length) {
            final(results[results.length - 1]);
        }
    })
});
```
上面代码中，forEach方法会同时发起六个异步任务，等到它们全部完成以后，才会执行final函数。

相比而言，上面的写法只要一秒，就能完成整个脚本。这就是说，并行执行的效率较高，比起串行执行一次只能执行一个任务，较为节约时间。但是问题在于如果并行的任务较多，很容易耗尽系统资源，拖慢运行速度。因此有了第三种流程控制方式。
## 5.4并行与串行的结合
```
var items = [1, 2, 3, 4, 5, 6, 7];
var results = [];
var running = 0;
var limit = 2;

function async(arg, callback) {
    console.log('参数为 ' + arg + ' , 1秒后返回结果');
    setTimeout(function () { callback(arg * 2); }, 1000);
}

function final(value) {
    console.log('完成: ', value);
}

function launcher() {
    while (running < limit && items.length > 0) {
        var item = items.shift();
        async(item, function (result) {
            results.push(result);
            running--;
            if (items.length > 0) {
                launcher();
            } else if (running === 0) {
                final(results);
            }
        });
        running++;
    }
}

launcher();
```
上面代码中，最多只能同时运行两个异步任务。变量running记录当前正在运行的任务数，只要低于门槛值，就再启动一个新的任务，如果等于0，就表示所有任务都执行完了，这时就执行final函数。

这段代码需要三秒完成整个脚本，处在串行执行和并行执行之间。通过调节limit变量，达到效率和资源的最佳平衡。
