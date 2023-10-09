const app =require("./app");
const dotenv=require("dotenv");
const connectDatabase=require("./config/database")

// Handling Uncaught Exception
process.on("UncaughtException",(err)=>{
    console.log(`Error:${err.message}`);
    console.log(`shutting down server due to unhandled Promise Rejection`);
    process.exit(1);
})


//Config 


dotenv.config({path:"backend/config/config.env"})

//Connecting to database
const server = app.listen(process.env.PORT, ()=>{
    console.log(`Server is working on http://localhost: ${process.env.PORT}`)

})
connectDatabase()



//Unhandled Promise Rejection 

process.on("unhandledRejection",(err)=>{
    console.log(`Error: ${err.message}`);
    console.log(`shutting down the server due to unhandled Promise rejection`);
    server.close(()=>{
        process.exit(1);
    });
});