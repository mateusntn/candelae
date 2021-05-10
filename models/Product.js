module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define(
        'Product',{
            name: DataTypes.STRING,
            description: DataTypes.STRING,
            quantProducts: DataTypes.INTEGER,
            value: DataTypes.FLOAT,
            sizes_id: DataTypes.INTEGER,
            models_id: DataTypes.INTEGER,
        }, {
            tableName: "products",
            timestamps: false
        }
    );
    Product.associate = (models) => {
        Product.belongsTo(models.Size, {as:"sizes", foreignKey:"sizes_id"});
        Product.belongsTo(models.Model, {as:"models", foreignKey:"models_id"});
        Product.hasMany(models.Img, {as: "imgs", foreignKey:"products_id"});
        Product.belongsToMany(models.Scent, {
            as:"scents",

            through: "scents_has_products",

            foreignKey:"products_id",

            otherKey:"scents_id",

            timestamps: false
        });
        Product.belongsToMany(models.Order, {

            as: "items", //alias da relação

            through: "order_item", //tabela intermediária

            foreignKey: "products_id",

            otherKey: "orders_id",

            timestamps: false

        });
    }
    return Product;
}