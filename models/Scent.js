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
        Scent.belongsToMany(models.Product, {
            as:"scents",
            
            through: "scents_has_products",
    
            foreignKey:"scents_id",
    
            otherKey:"products_id",
    
            timestamps: false
        });
    }
    return Scent;
}