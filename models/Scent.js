module.exports = (sequelize, DataTypes) => {
    const Scent = sequelize.define(
         'Scent',{
            name: DataTypes.STRING,
            description: DataTypes.STRING
        }, {
            tableName: "scents",
            timestamps: false
        }
    );
    
    return Scent;
}