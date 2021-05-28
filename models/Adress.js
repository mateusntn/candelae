module.exports = (sequelize, DataTypes) => {
    const Adress = sequelize.define(
        'Adress',{
            cep: DataTypes.INTEGER, 
            adress_street: DataTypes.STRING, 
            adress_number: DataTypes.INTEGER, 
            complement: DataTypes.STRING, 
            reference_point: DataTypes.STRING, 
            neighborhood: DataTypes.STRING, 
            city: DataTypes.STRING, 
            state: DataTypes.STRING
        }, {
            tableName: "adress",
            timestamps: false
        }
    );

    Adress.associate = (models) => {
        Adress.belongsTo(models.User, {as: "user", foreignKey:"user_id_adress", targetKey: 'id'});
        Adress.hasMany(models.Order, {as: "orders", foreignKey: "adress_id_orders", targetKey: 'id'});
    }
    
    return Adress;
}