module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
        'User',{
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            phone: DataTypes.STRING,
            cep: DataTypes.STRING,
            createdAt: DataTypes.DATE,
            cpf: DataTypes.STRING,
            password: DataTypes.STRING,
            updatedAt: DataTypes.DATE
        }, {
            tableName: "users",
            timestamps: true
        }
    );

    User.associate = (models) => {
        User.hasMany(models.Order, {as:"orders", foreignKey:"users_id"});
    }

    
    return User;
}