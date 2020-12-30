const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('setting', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "配置名"
    },
    value: {
      type: DataTypes.STRING(2000),
      allowNull: false,
      comment: "配置值"
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
    tableName: 'setting',
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
