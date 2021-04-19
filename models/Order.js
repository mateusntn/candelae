module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define(
        'Order',{
            createdAt: DataTypes.DATE,
            shipping: DataTypes.FLOAT,
            amount: DataTypes.FLOAT,
            users_id: DataTypes.INTEGER,
            formPayment_id: DataTypes.INTEGER,
            order_status: DataTypes.STRING,
            modifiedAt: DataTypes.DATE
        }, {
            tableName: "orders",
            timestamps: true
        }
    );

    Order.associate = (models) => {
        Order.belongsTo(models.User, {as: "user", foreignKey: "users_id"});
    }
    
    return Order;
}