module.exports = app => {
    const dailyProgress = require("../controllers/daily_progress.controller");
  
    var router = require("express").Router();
  
    // Create/Add
    router.post("/", dailyProgress.create);

    //List
    router.get("/", dailyProgress.List);

    //List by id
    router.get("/id:id", dailyProgress.List);

    app.use('/dailyProgress', router);
}