const fs = require('fs')
const path = require('path')

const models = require('./models')
const articleModel  = models.getModel('article');

let articles = require('../data/article.json');

articleModel.find({articleId:{$gt:5,$lt:10}},function (err,result) {
    console.log(result)
})

// let article = articleModel.findOne({articleId:2})
// article.exec(function (err,result) {
//     console.log(result)
// })
// articleModel.findOne({articleId:2},function (err,aricle) {
//     console.log(aricle)
// })


for(let i =0;i<articles.length-1;i++) {
    var path1=path.join(path.resolve(__dirname,'..'),'/data/'+articles[i].articleTitle+'.md')
    fs.readFile(path1, function(err, data){
        if(err){
            console.log(err);
            // res.send("文件不存在！");
        }else{
            let str =data.toString()
            articles[i].articleContent =str;
        }
    });
}
console.log(articles);
setTimeout(()=>{
    articleModel.insertMany(articles,function (err) {
        console.log(err)
    })
},100000)

console.log('insert suceess')


// console.log(articles)

