'use strict'
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Band extends Model {
        static associate({ MeetGreet }) {
          // meet and greets 
          Band.hasMany(MeetGreet, {
            foreignKey: "band_id",
            as: "meet_greets"
          })
      }
    }      
  MeetGreet.init({
    meet_greet_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    event_id: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    band_id: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    meet_start_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    meet_end_time: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'MeetGreet',
    tableName: 'meet_greets',
    timestamps: false
  })
  return MeetGreet
}