const mongoose = require("mongoose")
const connect = () => {
    return mongoose.connect("mongodb+srv://epj23Azfqw:123asd456@relationship.3rpqw.mongodb.net/erdata?retryWrites=true&w=majority");
    
}
module.exports = connect;