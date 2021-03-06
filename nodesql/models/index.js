const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const basename = path.basename(module.filename)
const env = process.env.NODE_ENV || 'development'
const config = require(`${__dirname}/../config/mysql.json`)[env]
const db = {}
// console.log(basename, config);
let sequelize
if (config.en_vuse_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable])
} else {
  sequelize = new Sequelize(
    config.database, 
    config.username,
    config.password,
    config)
}

fs.readdirSync(__dirname)
  .filter((file) => (file.indexOf('.') !== 0) &&
  (file !== basename) &&
  (file.slice(-3) === '.js'))
  .forEach(file => {
    const model = sequelize.import(path.join(__dirname, file))
    db[model.name] = model
  })

Object.keys(db).forEach(modelName => {
  // console.log(db[modelName].getUsers);
  if (db[modelName].associate) {
    console.log(db[modelName]);
    db[modelName].associate(db)
  }
})

db.sequelize= sequelize

module.exports = db