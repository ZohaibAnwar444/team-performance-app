const { async } = require("rxjs");
const db = require("../models");
const TeamMemberType = db.team_member_type;
const Op = db.Sequelize.Op;


module.exports = {
    list : async (req,res) => {
        TeamMemberType.findAll()
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving tutorials."
          });
        });
    },

    create : async (req,res) => {
        let data = req.body;
        TeamMemberType.create(data)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while creating the Daily Progress."
            });
          });
    }
}
