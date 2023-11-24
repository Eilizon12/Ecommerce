const app = require("./app");
const connectDatabase = require('./config/database')

const dotenv = require("dotenv");


//Config

dotenv.config({path:"./config/config.env"});

//Connection to Database

connectDatabase();


app.listen(process.env.PORT, () => {
	console.log(`Server started on port	http://localhost:${process.env.PORT}`);
});
    
