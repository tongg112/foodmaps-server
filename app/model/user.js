const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "用户名"
    },
    password: {
      type: DataTypes.STRING(32),
      allowNull: false,
      comment: "密码"
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "创建时间"
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "更新时间"
    },
    deleted_at: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "删除时间"
    }
  }, {
    sequelize,
    tableName: 'user',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
