## Vuex之Getters
首先普通getters的写法
getters的第一个参数是state
```
//返回articles数组中articleId==1的对象
getArticle: (state) => {//这里使用了箭头函数，
      return state.articles.filter(article => article.articleId == 1)
  }
 // 非箭头函数写法 这样可能比较通俗易懂
  getArticle2: function (state) {
      return state.articles.find(function (item) {
        return item.articleId ==1
      })
  }
```
但是这里我们并不希望id是写死的，而是应该通过我们传递的值，那我们只要在getter返回的值套上一层$\color{red}{函数}$那我们就可以实现传参数
```
 getArticle: (state) => {
 	//返回一个函数用于接收
      return (articleId)=>state.articles.find(item => item.articleId ==articleId)
  },
  getArticle2: function (state) {
	//返回一个函数用于接收
    return function (articleId) {
    	
      return state.articles.find(item => item.articleId ==articleId)
    }
  }
```
调用方式
``
  console.log(this.$store.getters.getArticle2(0))
    console.log(this.$store.getters.getArticle(0))`
``
