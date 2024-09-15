
class SiteController{
    // [get] / news
    index(req, res){
        res.render('news');
    }
    search(req, res){
        res.send('news');
    }
}
module.exports = new SiteController; 