module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.define(
        'Model',{
            name: DataTypes.STRING
        }, {
            tableName: "models",
            timestamps: false
        }
    );
    Model.associate = (models) => {
        Model.hasMany(models.Product, {as:"models", foreignKey:"models_id"});
    }
    return Model;
}