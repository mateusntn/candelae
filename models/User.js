module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
        'User',{
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            phone: DataTypes.STRING,
            cep: DataTypes.STRING,
            createdAt: DataTypes.TIMESTAMP,
            cpf: DataTypes.STRING,
            password: DataTypes.STRING,
            modifiedAt: DataTypes.TIMESTAMP
        }, {
            tableName: "users",
            timestamps: true
        }
    );
    
    return User;
}