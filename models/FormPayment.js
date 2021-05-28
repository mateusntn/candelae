module.exports = (sequelize, DataTypes) => {
    const FormPayment = sequelize.define(
        'FormPayment',{
            titular_name: DataTypes.STRING, 
            titular_cpf: DataTypes.INTEGER, 
            card_number: DataTypes.INTEGER, 
            card_code: DataTypes.INTEGER, 
            card_valid: DataTypes.STRING,
        }, {
            tableName: "formpayments",
            timestamps: false
        }
    );

    FormPayment.associate = (models) => {
        FormPayment.hasMany(models.Order, {as:"orders", foreignKey:"formPayments_id"});
        FormPayment.belongsTo(models.User, {as: "user", foreignKey:"user_id_payment", targetKey: 'id'});
    }
    
    return FormPayment;
}