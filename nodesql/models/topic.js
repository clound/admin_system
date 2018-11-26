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
        type: DataTypes.BOOLEAN,
        allowNull: false
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
