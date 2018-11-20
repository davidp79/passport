module.exports = function(sequelize, DataTypes){
    var ChatRoom = sequelize.define("ChatRoom", {
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
            
        },

        message: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
              }
        }
    })
    return ChatRoom;
}