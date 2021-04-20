module.exports = (sequelize, DataTypes) => {
    const FormPayment = sequelize.define(
        'FormPayment',{
            name: DataTypes.STRING
        }, {
            tableName: "formPayments",
            timestamps: false
        }
    );

    FormPayment.associate = (models) => {
        FormPayment.hasMany(models.Order, {as:"orders", foreignKey:"formPayments_id"});
    }
    
    return FormPayment;
}