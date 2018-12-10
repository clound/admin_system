'use strict'
module.exports = function(squelize, DataTypes) {
  const Topic = squelize.define(
    'topic',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false, //非空
        autoIncrement: true, //自动递增
        primaryKey: true,
        unique: true
      },
      userId: {
        type: DataTypes.BIGINT(11),
        field: 'user_id',
        allowNull: false
      },
      type: {
        type: DataTypes.ENUM('1', '2', '3', '4', '5', '6', '7', '8'),
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
        type: DataTypes.BOOLEAN,
        defaultValue: true
      }
    },
    {
      freezeTableName: true,
      timestamps: false,
      comment: '文章表',
      indexes: [
        {
          name: 'topic_userId',
          method: 'BTREE',
          fields: ['user_id']
        }
      ]
    }
  )
  Topic.associate = function(models) {
    Topic.belongsTo(models.user, {as: 'user'})
  }
  return Topic
}
