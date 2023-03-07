
const { Model } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    
    class TeamMember extends Model {
        static associate(models) {
            TeamMember.hasMany(models.daily_progress, { foreignKey: 'team_member_id', onDelete: 'RESTRICT' });
            TeamMember.belongsTo(models.team_member_type, { foreignKey: 'id', onDelete: 'RESTRICT' });

        }
    }

    TeamMember.init({
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
          name: {
            type: Sequelize.STRING
          },
          team_member_type_id: {
            type: Sequelize.INTEGER
          }
    },{
        sequelize,
        timestamps: false,
        tableName: 'team_member',
        modelName: 'team_member',
    })

    
    return TeamMember;
  };