module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define(
        'Product',{
            name: DataTypes.STRING,
            description: DataTypes.STRING,
            quantProducts: DataTypes.INTEGER,
            value: DataTypes.FLOAT,
            scents_id: DataTypes.INTEGER,
            sizes_id: DataTypes.INTEGER,
            models_id: DataTypes.INTEGER,
        }, {
            tableName: "products",
            timestamps: false
        }
    );
    Product.associate = (models) => {
        Product.belongsTo(models.Scent, {as:"scents", foreignKey:"scents_id"});
        Product.belongsTo(models.Size, {as:"sizes", foreignKey:"sizes_id"});
        Product.belongsTo(models.Model, {as:"models", foreignKey:"models_id"});
        Product.hasMany(models.Img, {as: "imgs", foreignKey:"products_id"});
    }
    return Product;
}