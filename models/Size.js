module.exports = (sequelize, DataTypes) => {
    const Size = sequelize.define(
        'Size',{
            name: DataTypes.STRING
            
        }, {
            tableName: "sizes",
            timestamps: false
        }
    )
        return Size;
}