'use strict'

module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define(
    'user',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false, //非空
        autoIncrement: true, //自动递增
        primaryKey: true //主键
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      phone: {
        type: DataTypes.STRING
      },
      avatar: {
        type: DataTypes.STRING
      },
      active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
      }
    },
    {
      freezeTableName: true,
      comment: '用户信息'
    }
  )
  User.associate = function(models) {
    // console.log(models)
    User.hasMany(models.topic, {
      as: 'AuthorTopics',
      foreignKey: 'authorId'
    })
    User.belongsToMany(models.topic, {
      as: 'WatchedTopics',
      through: 'UserWatchedTopic'
    })
    User.belongsToMany(models.topic, {
      as: 'CommentedTopics',
      through: 'UserCommentTopic'
    })
  }
  User.getUsers = function(options) {
    return this.findAll(options)
  }
  return User
}

// //静态方法
// const classMethods = {
//   //根据id查询
//   getUserById: function(id) {
//     return this.findById(id)
//   },
//   //获取所有
//   getUsers: function(options) {
//     return this.findAll(options)
//   },
//   //根据id更新数据
//   updateUserById: function(values, id) {
//     return this.update(values, {
//       where: {
//         id: id
//       }
//     })
//   },
//   //根据id删除数据
//   deleteById: function(id) {
//     return this.destroy({
//       where: {
//         id: id
//       }
//     })
//   }
// }
