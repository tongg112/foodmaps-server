const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('restaurant', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "店铺名"
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "描述"
    },
    lng: {
      type: DataTypes.DECIMAL(10,7),
      allowNull: false,
      comment: "经度"
    },
    lat: {
      type: DataTypes.DECIMAL(10,7),
      allowNull: false,
      comment: "纬度"
    },
    userid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "创建者id"
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
    tableName: 'restaurant',
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
      {
        name: "userid",
        using: "BTREE",
        fields: [
          { name: "userid" },
        ]
      },
    ]
  });
};
