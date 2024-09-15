
class NewsController{
    // [get] / news
    index(req, res){
        res.render('news');
    }
    // slug
    show(req, res){
        res.send('new deital');
    }
}
module.exports = new NewsController;