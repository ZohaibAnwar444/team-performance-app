const team_member = require("./team_member");

const { Model } = require('sequelize');

module.exports = (sequelize, Sequelize) => {

    class TeamMemberType extends Model {
        static associate(models) {
            TeamMemberType.hasOne(models.team_member, { foreignKey: 'team_member_types_id', onDelete: 'RESTRICT' });
        }
    }
    TeamMemberType.init({
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
          name: {
            type: Sequelize.STRING
          },
    },{
        sequelize,
        timestamps: false,
        tableName: 'team_member_type',
        modelName: 'team_member_type',
    })

    return TeamMemberType;
  };