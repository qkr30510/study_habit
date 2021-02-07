const Sequelize = require('sequelize');
const User = require('./user');
const Comment = require('./comment');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);
db.sequelize = sequelize;

db.User = User;
db.Comment = Comment;

User.init(sequelize);
Comment.init(sequelize);

User.associate(db);
Comment.associate(db);

module.exports = db;

// INSERT INTO nodejs.users_sequelize (name, age, married, comment)
// VALUES ('zero', age:24, married: 0, comment: '자기소개1');
// User.create({
//     name: 'zero',
//     age: 24,
//     married: false,
//     comment: '자기소개1'
// });

// // 1. SELECT * FROM nodejs.users;
// User.findAll({});

// // 2. SELECT name, married FROM nodejs.users;
// User.findAll({
//     attributes: ['name', 'married']
// });

// // 3. SELECT name, age FROM nodejs.users WHERE married = 1 AND age > 30;
// const {
//     Op
// } = require('sequelize');

// User.findAll({
//     attribute: ['name', 'age'],
//     where: {
//         married: true,
//         age: {
//             [Op.gt]: 30
//         }
//     }
// })

// // 4. SELECT id, name FROM users WHERE married = 0 OR age > 30;
//  User.findAll({
//      attributes: ['id', 'name'],
//      where: {
//          [Op.or]: [{ married:false}, {age: {[Op.gr]: 30}}]
//      }
//  });

//  // 5. SELECT id, name FROM users ORDER BY age DESC;
//  User.findAll({
//      attributes: ['id', 'name'],
//      order: [['age', 'DESC']]
//  });

//  // 6. SELECT id, name FROM users ORDER BY age DESC LIMIT 1;
//  User.findAll({
//      attributes: ['id', 'name'],
//      order: [['age', 'DESC']],
//      limit: 1
//  });

//  // 7. SELECT id, name FROM users ORDER BY age DESC LIMIT 1 OFFSET 1;
//  User.findAll({
//      attributes: ['id', 'name'],
//      order: ['age', 'DESC'],
//      limit: 1,
//      offset: 1,
//  })

//  // 8. UPDATE nodejs.users SET comment = '바꿀 내용' WHERE id = 1;
//  User.update({
//      comment: '바꿀 내용',
//      where: {
//          id: 1
//      }
//  })

//  // 9. DELETE FROM nodejs.users WHERE id = 1;
//  User.destroy({
//      where: {
//          id: 1
//      }
//  })