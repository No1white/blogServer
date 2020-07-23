# css动画

## transition（过渡）

transition：property duration timing-function delay；

transition:属性名称 过渡时间  速度曲线  延迟；

例如： 设置一个div宽度从100到300

```
div{
    width: 100px;
    height: 100px;
    transition: width 2s linear 1s ;  /*此处是过渡属性是	width 过渡时间2秒   速度曲线是：匀速   延迟一秒执行*/
    background: red;
}
/* 当鼠标放在div上执行动画 */
div:hover{
	width: 300px; 
}
```

速度曲线的值有：

- linear 匀速
- ease 开始慢  后面快
- ease-in  开始慢  后面运行
- ease-out  开始匀速 结束慢
- ease-in-out  慢速开始 中间匀速  结束慢
- curbic-bezier（n,n,n） 自己定义速度

这些只需要知道有这么些值，等需要的时候再查即可

