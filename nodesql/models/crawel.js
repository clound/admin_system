'use strict'
module.exports = function(squelize, DataTypes) {
    var Crawel = squelize.define('crawel', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey:true,
            allowNull:false,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        url: {
            type: DataTypes.STRING
        },
        date: {
            type: DataTypes.STRING(10)
        },
        view: {
            type: DataTypes.STRING(10)
        }
    }, {
        freezeTableName: true,
        timestamps: false
    })
    return Crawel;
};