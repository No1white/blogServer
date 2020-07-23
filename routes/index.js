var express = require('express');
var router = express.Router();

const models = require('../db/models');
const articleModel = models.getModel('article');


/* GET home page. */
router.get('/', function(req, res, next) {
  let page = req.query.page;
  const category = req.query.category;
  let articles = [];
  let arr =[];
  let arrLength;
  articleModel.find(function (err,result) {
    if(category!='undefined') {
      articles = result.filter(article=>article.language ==category)
    }else {
      articles = result;
    }
    if(page <= 1) {
      arrLength = articles.length<10 ? articles.length : 10;
    }else {
      arrLength = page*10 >articles.length ? articles.length : page*10;
    }
    if(page > 1 ) {
      page = (page-1)*10;
    }

    let banners = [];
    for (let i=0;i<5;i++) {
      banners.push(result[i])
    }

    //推荐文章
    let numbers =[]
    let comArticles = []

    for (let i=0;i<arrLength;i++) {
      numbers.push(Math.floor(Math.random()*articles.length))
    }
    numbers.forEach(i=>{
      comArticles.push(articles[i])
    })
    for(let i =page;i<arrLength;i++) {

      arr.push(articles[i]);
    }

    let categorys = [];
    result.forEach(item=>{
      let flag=true;
      categorys.forEach(category=>{
        if(item.language ==category) {
          flag=false;
        }
      })
      if(flag) {
        categorys.push(item.language);
      }
    })

    let NewArticles ={
      articles:arr,
      articleNum:articles.length,
      banners,
      categorys,
      comArticles
    }
    res.send({code:0,articles:NewArticles});
  })

});

router.get('/technology',function (req,res) {
  let page = req.query.page;
  const category = req.query.category || undefined;
  let articles = [];
  let arr =[];
  let arrLength;
  console.log(category)
  articleModel.find(function (err,result) {
    console.log(category)
    if(category==undefined) {
      console.log(1)
      articles = result.filter(article=>article.language ==category && article.language !='总结')
      console.log(articles)
    }else {
      articles = result.filter(article=>article.language !='总结');
    }
    if(page <= 1) {
      arrLength = articles.length<10 ? articles.length : 10;
    }else {
      arrLength = page*10 >articles.length ? articles.length : page*10;
    }
    if(page > 1 ) {
      page = (page-1)*10;
    }

    //推荐文章
    let numbers =[]
    let comArticles = []

    for (let i=0;i<arrLength;i++) {
      numbers.push(Math.floor(Math.random()*articles.length))
    }
    numbers.forEach(i=>{
      comArticles.push(articles[i])
    })
    for(let i =page;i<arrLength;i++) {

      arr.push(articles[i]);
    }

    let categorys = [];
    result.forEach(item=>{
      let flag=true;
      categorys.forEach(category=>{
        if(item.language ==category || item.language =='总结' ) {
          flag=false;
        }
      })
      if(flag) {
        categorys.push(item.language);
      }
    })

    let NewArticles ={
      articles:arr,
      articleNum:articles.length,
      categorys,
      comArticles
    }
    res.send({code:0,articles:NewArticles});
  })
})


router.get('/note',function (req,res) {
  let page = req.query.page;
  const category = req.query.category || undefined;
  let articles = [];
  let arr =[];
  let arrLength;
  console.log(category)
  articleModel.find(function (err,result) {
    console.log(category)
    if(category==undefined) {
      console.log(1)
      articles = result.filter(article=>article.language ==category && article.language =='总结')
      console.log(articles)
    }else {
      articles = result.filter(article=>article.language =='总结');
    }
    if(page <= 1) {
      arrLength = articles.length<10 ? articles.length : 10;
    }else {
      arrLength = page*10 >articles.length ? articles.length : page*10;
    }
    if(page > 1 ) {
      page = (page-1)*10;
    }

    //推荐文章
    let numbers =[]
    let comArticles = []

    for (let i=0;i<arrLength;i++) {
      numbers.push(Math.floor(Math.random()*articles.length))
    }
    numbers.forEach(i=>{
      comArticles.push(articles[i])
    })
    for(let i =page;i<arrLength;i++) {

      arr.push(articles[i]);
    }

    let categorys = [];
    articles.forEach(item=>{
      let flag=true;
      categorys.forEach(category=>{
        if(item.language ==category && item.language !='总结' ) {
          flag=false;
        }
      })
      if(flag) {
        categorys.push(item.language);
      }
    })

    let NewArticles ={
      articles:arr,
      articleNum:articles.length,
      categorys,
      comArticles
    }
    res.send({code:0,articles:NewArticles});
  })
})
module.exports = router;
