const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = User = mongoose.model('user', UserSchema)





















// module.exports = function(sequelize, DataTypes){
//     var User = sequelize.define("User", {
//         firstName: {
//             type: DataTypes.STRING,
//             allowNull: false
//         },
//         lastName: {
//             type: DataTypes.STRING,
//             allowNull: false
//         },
//         userName: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             isUnique :true
//         },
//         password: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             validate: {
//                 len: [5]
//               }
//         },
//         email: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             isUnique :true,
//             validate:{
//                 isEmail : true
//             }
//         },
//         isDeleted: {
//             type: DataTypes.BOOLEAN,
//             default: false
//         }

//     })
//     return User;
// }