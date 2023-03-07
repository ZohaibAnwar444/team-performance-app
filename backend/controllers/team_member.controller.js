const db = require("../models");
const TeamMember = db.team_member;
const Op = db.Sequelize.Op;


module.exports = {
    list : async (req,res) => {
        TeamMember.findAll()
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

    create : async (req, res) => {
        let data = req.body;
        TeamMember.create(data)
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
