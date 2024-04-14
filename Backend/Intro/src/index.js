
// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectDb from "./db/index.js";


dotenv.config({
    path : './env'
})

connectDb()
    .then(()=>{
        app.listen(process.env.PORT || 8000)
        console.log(`server is running at port :::` , process.env.PORT)
    })
    .catch((error)=>{
        console.log("the problem in the app file connection problem" , error)
    })













/*
const app = express(); 
; (async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on("error", (error)=>{
            console.log("db not able to talk")
            throw error;
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`app is listening on port ${process.env.PORT}`)
        })
    } catch (error) {
        console.log("error in iffy" , error); 
        throw error
    }
})() */// iffy ...



