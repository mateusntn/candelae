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
    
    return Img;
}