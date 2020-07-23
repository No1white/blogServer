## replace的妙用

今天在学习vue源码是看到relace的使用形式我差点都不认识了，接下来就来了解一下replace其他作用

我们平常的用法

```
let str = 'hello haha haha';
str = str.replace('haha','world') //hello world haha
console.log(str);
```

我们平常这样替换只会替换一个值

第一个参数可以接受字符串/正则表达式 

第二参数可以是替换文本或者替换文本的函数

使用正则可以替换所有只需要加g 全局匹配

```
let str = 'hello haha haha';
str = str.replace(/haha/g,'world')
console.log(str);
```

讲完这么多

终于要引来我们的主角

当第二个参数为函数时每次匹配都会调用这个函数

函数传递$\color{red}{四个参数}$

#### **当匹配项没有括号是只有3个参数**

1.match  匹配的内容

2.index  下标

3.原字符串  

这三个参数值得注意的是 第一个参数和第二参数 

可以看一下以下两个结果的区别

```
let str = 'hello haha haha';
		str = str.replace(/haha/g,function(match,index,str){
			console.log(match); //正则匹配项
			console.log(index); //此处是文本所以下标
			console.log(str);
		})
		console.log(str);
		
```

![image-20200717193540056](C:\Users\lin\AppData\Roaming\Typora\typora-user-images\image-20200717193540056.png)

**当匹配文本有括号时有四个参数**

1.match  匹配项  

2.匹配项的内容  

3index  下标

3.原字符串  

例如：{{msg}}将msg替换成world

```
let str = '{{msg}} {{person}}';
		str = str.replace(/\{\{(.*?)\}\}/g,function(match,content,index,str){
			console.log(match); //此处是正则匹配项
			console.log(content)；
			console.log(index); //此处是匹配的内容
			console.log(str);
			return 'world'
		
		})
		console.log(str);
```

![image-20200717195335718](C:\Users\lin\AppData\Roaming\Typora\typora-user-images\image-20200717195335718.png)

轻松可以把所有的模板替换掉 

