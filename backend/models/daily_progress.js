const { Model } = require('sequelize');

module.exports = (sequelize, Sequelize) => {

    class DailyProgress extends Model {
        static associate(models) {
            DailyProgress.belongsTo(models.team_member, { foreignKey: 'id', onDelete: 'RESTRICT' });

        }
    }
    DailyProgress.init({
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
          team_member_id: {
            type: Sequelize.INTEGER
          },
          absent: {
            type: Sequelize.TINYINT
          },
          late: {
            type: Sequelize.TINYINT
          },
          scrum: {
            type: Sequelize.TINYINT
          },
          delay: {
            type: Sequelize.TINYINT
          },
          availability: {
            type: Sequelize.TINYINT
          },
          comments: {
            type: Sequelize.STRING
          },
          task: {
            type: Sequelize.STRING
          },
          date: {
            type: Sequelize.DATE
          },
    },{
        sequelize,
        timestamps: false,
        tableName: 'daily_progress',
        modelName: 'daily_progress',
    })
  
    return DailyProgress;
  };