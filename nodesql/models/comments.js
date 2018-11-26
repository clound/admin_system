module.exports = function(squelize, DataTypes) {
  const Comment = squelize.define(
    'comment',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false, //非空
        autoIncrement: true, //自动递增
        primaryKey: true //主键
      },
      content: {
        type: DataTypes.STRING
      }
    },
    {
      freezeTableName: true,
      timestamps: false,
      comment: '文章评价表'
    }
  )
  return Comment
}
