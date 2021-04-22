module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.define(
        'Model',{
            name: DataTypes.STRING
        }, {
            tableName: "models",
            timestamps: false
        }
    );
    
    return Model;
}