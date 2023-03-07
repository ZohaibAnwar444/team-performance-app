module.exports = app => {
    const teamMemberType = require("../controllers/team_member_type.controller");
  
    var router = require("express").Router();
  
    //List
    router.get("/", teamMemberType.list);

    //Create Add
    router.post("/", teamMemberType.create);

    app.use('/teamMemberType', router);
}