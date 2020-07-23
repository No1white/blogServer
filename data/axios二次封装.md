# axios

Axios 是一个基于 promise 的 HTTP 库，用来发送ajax请求，用在浏览器和node中。

### 安装方式

npm：

```
npm install axios
```

cdn:

```
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```

### Get请求

```
axios.get('请求路径')
		.then(function(res){
			//成功执行
		})
		.catch(function(err){
			//失败执行
		})
//例子		
axios.get('http://localhost:3000/')
			.then(function(res){
				console.log(res);
			})
			.catch(function(err){
				console.log(err);
			})
```

### Post请求

```
axios.post('请求路径',{提交数据必须是一个对象})
	.then(function(res){
				console.log(res);
			})
			.catch(function(err){
				console.log(err);
			})
//例子			
axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

```

### 执行多个并发请求

```
function getUserAccount() {
  return axios.get('/user/12345');
}

function getUserPermissions() {
  return axios.get('/user/12345/permissions');
}

axios.all([getUserAccount(), getUserPermissions()])
  .then(axios.spread(function (acct, perms) {
    // 两个请求现在都执行完成
  }));
```

#### axios拦截器

拦截器：当你发送请求时或者接受响应时要做一些操作就可以使用拦截器

```
// 添加请求拦截器，在发送请求之前做些什么
axios.interceptors.request.use(function (config) {
  // 显示loading
  return config
}, function (error) {
  // 请求错误时弹框提示，或做些其他事
  return Promise.reject(error)
})

```

```
// 添加响应拦截器(**具体查看axios文档**)
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么，允许在数据返回客户端前，修改响应的数据
  // 如果只需要返回体中数据，则如下，如果需要全部，则 return response 即可
  return response.data
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})
```

