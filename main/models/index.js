const User = require('./User');
const Project = require('./Project');

User.hasMany(Project, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Project.belongsTo(User, {
  foreignKey: 'user_id'
  onDelete: 'CASCADE',
});


Dog.belongsTo(User, {
  foreignKey: 'user_id'
  onDelete: 'CASCADE',
});
User.hasMany(Dog, {
  foreignKey: 'user_id'
  onDelete: 'CASCADE',
});

// dogSubmitInput.belongsTo(User, 
//   foreignKey: 'user_id')

// dogSubmitInput.belongsTo(User,
//   foreignKey: ('user_id)

module.exports = { User, Project, Dog };
