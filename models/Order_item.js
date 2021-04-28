module.exports = (sequelize, DataTypes) => {

    const Order_item = sequelize.define(
        'Order_item',
        {
            quantProducts: DataTypes.INTEGER,
            products_id:{
                type:DataTypes.INTEGER,
                foreignKey:true,
                primaryKey:true
            },
            orders_id:{
                type:DataTypes.INTEGER,
                foreignKey:true,
                primaryKey:true
            }         
        },{
            tableName:"order_item",
            timestamps:false
        }
    )
    Order_item.associate = (models) =>{
        Order_item.belongsTo(models.Product,{as:"order_products",foreignKey:"products_id"}) 
        Order_item.belongsTo(models.Order,{as:"order_items",foreignKey:"orders_id"}) 
      }
  
    return Order_item;
    
  }
