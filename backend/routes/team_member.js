module.exports = app => {
    const teamMember = require("../controllers/team_member.controller");
  
    var router = require("express").Router();
  
  
    // List
    router.get("/", teamMember.list);

    //Create/Add
    router.post("/", teamMember.create)

    app.use('/teamMember', router);
}