let mongoose = require("mongoose");
let dbURI = "mongodb://localhost:27017/PAWII-SI52"
//mongodb+srv://paw2:si@paw2.iendmj6.mongodb.net/PAWII-SI?retryWrites=true&w=majority&appName=paw2

mongoose.connect(dbURI, {
    // useNewUrlPerser : true
});
mongoose.connection.on("connected", () =>{
    console.log("Connected to MongoDB");
});
mongoose.connection.on("error", (error) =>{
    console.log("Connection Eror : " + error);
});
mongoose.connection.on("disconnected", () =>{
    console.log("Disconnected from MongoDB");
});