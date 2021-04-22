module.exports = (sequelize, DataTypes) => {
    const Size = sequelize.define(
        'Size',{
            name: DataTypes.STRING
            
        }, {
            tableName: "sizes",
            timestamps: false
        }
    )
    Size.associate = (models) => {
        Size.hasMany(models.Product, {as:"sizes", foreignKey:"sizes_id"});
    }
        return Size;
}