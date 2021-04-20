module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define(
        'Order',{
            createdAt: DataTypes.DATE,
            shipping: DataTypes.FLOAT,
            amount: DataTypes.FLOAT,
            users_id: DataTypes.INTEGER,
            formPayments_id: DataTypes.INTEGER,
            order_status: DataTypes.STRING,
            updatedAt: DataTypes.DATE
        }, {
            tableName: "orders",
            timestamps: true
        }
    );

    Order.associate = (models) => {
        Order.belongsTo(models.User, {as: "user", foreignKey: "users_id"});
        Order.belongsTo(models.FormPayment, {as: "formPayments", foreignKey: "formPayments_id"});

    }
    
    return Order;
}