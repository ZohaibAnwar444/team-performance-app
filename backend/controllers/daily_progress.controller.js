const { async } = require("rxjs");
const { where } = require("sequelize");
const db = require("../models");
const DailyProgress = db.daily_progress;
const Op = db.Sequelize.Op;


module.exports = {

    List : async (req,res) => {
        console.log(req.params.id)
        if(req.params.id){
          id = req.params.id.substring(1)
          DailyProgress.findAll({where: {team_member_id : id}})
          .then(data => {
            res.send(data);
          })
          .catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while retrieving tutorials."
            });
          });
        }
    },

    create : async (req,res) => {
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }

  let data = req.body
  let date = new Date().toISOString().substring(10,-1);
  data.date = date;

  DailyProgress.create(data)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Daily Progress."
      });
    });
    }
}