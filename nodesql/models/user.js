'use strict'

module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define(
    'user',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false, //非空
        autoIncrement: true, //自动递增
        primaryKey: true, //主键
        unique : true
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
    User.hasMany(models.topic, {
      as: 'Topics',
      foreignKey:'user_id',
      targetKey:'id'
    })
    User.hasOne(models.usercheckin, {
      as: 'CheckIn',
      foreignKey:'user_id',
      targetKey:'id'
    })
  }
  User.getUsers = function(options) {
    return this.findOne(options)
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
