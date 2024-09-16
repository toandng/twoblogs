// const Course = require('../models/Course');

// const {mutipleMongooseToObject} = require('../../util/mongoose');

// class SiteController{
//     // [get] / news
//     index(req, res, next){
//         // Course.find({})
//         // .lean()
//         // .then((courses) => {
//         //     res.render('home', {courses});
//         // })
//         // .catch(error => {
//         //     next(error);
//         // });
//         res.json('name');
//     }
//     search(req, res){
//         res.send('search');
//     }
// }
// module.exports = new SiteController; 

const Course = require("../models/Course");
const {mutipleMongooseToObject} = require('../../util/mongoose');

class SiteController {
  // [GET] /news
  async index(req, res) {
    try {
      const courses = await Course.find({});
      res.json(courses);
    } catch (error) {
      res.status(400).json({ err: "ERROR!!!" });
    }
  }
  // [GET] /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
