module.exports = (sequelize, DataTypes) => {
    const Scent = sequelize.define(
         'Scent',{
            name: DataTypes.STRING,
            description: DataTypes.STRING
        }, {
            tableName: "scents",
            timestamps: false
        }
    );
    Scent.associate = (models) => {
        Scent.hasMany(models.Product, {as:"scents", foreignKey:"scents_id"});
    }
    return Scent;
}