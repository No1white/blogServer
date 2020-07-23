var express = require('express')
var router = express.Router();
var marked = require( "marked" );

const fs = require('fs')
const path = require('path')

router.post('/articles', function (req,res) {
    const article_id=req.body.id  //前端传过来的文章id
    console.log(article_id)

    const pathUrl =path.join(__dirname, path)  //根据文章id，获取文件地址
    console.log(pathUrl)
    // .body = fs.createReadStream(pathUrl)  //返回一个readStream对象
})
router.get('/',function (req,res) {

    const articleId = req.query.articleId
    const articles = require('../data/article.json')
    let mdData = articles.find(item=>item.articleId ==articleId)
    var path1=path.join(path.resolve(__dirname,'..'),'/data/'+mdData.articleTitle+'.md')
    fs.readFile(path1, function(err, data){
        if(err){
            console.log(err);
            res.send("文件不存在！");
        }else{
            console.log(path1)
            mdData.articleContent = data.toString()

            res.send({code:0,mdData})
            // str = marked(data.toString());
            // console.log(str)

            // res.render('md',{str});
        }
    });

})


module.exports = router;
