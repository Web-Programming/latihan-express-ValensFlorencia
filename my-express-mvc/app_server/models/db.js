let mongoose = require("mongoose");
let dbURI = "mongodb://localhost:27017"

mongoose.connect(dbURI,{
    useNewURLParser:true
});
mongoose.connection.on("connected",() => {
    console.log("Connected To MongoDB");
});

mongoose.connection.on("error",(error) => {
    console.log("Connected Error: " + error);
});

mongoose.connection.on("disconnected",() => {
    console.log("Disconnected From MongoDB");
});