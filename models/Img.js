module.exports = (sequelize, DataTypes) => {
    const Img = sequelize.define(
        'Img',{
            path: DataTypes.STRING,
            products_id: DataTypes.INTEGER
        }, {
            tableName: "imgs",
            timestamps: false
        }
    );
    Img.associate = (models) => {
        Img.belongsTo(models.Product, {as: "products", foreignKey:"products_id"});
    }
    return Img;
}