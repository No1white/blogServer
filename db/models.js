const mongoose = require('./conn');
//文章schema
const articleSchema = mongoose.Schema({
    articleId:{type:Number},
    articleTitle:{type:String,required:true},
    articleContent:{type:String,required:true},
    postedTime:{type:Date},
    pageView:{type:Number},
    commentsNum:{type:Number},
    thumbnail:{type:String,required:true},
    language:{type:String,required:true}
})


const articleModel = mongoose.model('article',articleSchema);

module.exports = {
    getModel(name) {
        return mongoose.model(name);
    }
}
