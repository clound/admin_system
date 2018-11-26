'use strict'
module.exports = function(squelize, DataTypes) {
  const Topic = squelize.define(
    'topic',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false, //非空
        autoIncrement: true, //自动递增
        primaryKey: true //主键
      },
      type: {
        type: DataTypes.ENUM('1','2','3','4','5','6','7','8'),
        allowNull: false
      },
      title: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      description: {
        type: DataTypes.STRING(150),
        allowNull: false
      },
      content: {
        type: DataTypes.TEXT
      },
      ispublished: {
        type: DataTypes.BOOLEAN
      }
    },
    {
      freezeTableName: true,
      timestamps: false,
      comment: '文章表'
    }
  )
  return Topic
}
