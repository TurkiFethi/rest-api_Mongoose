const express= require ("express")
const mongoose = require("mongoose")
const router = require("./routes/contacts")

const app=express()

// body-parser Middlware
app.use(express.json())

// connect db
const db="mongodb://localhost:27017/workshopContactList"

mongoose.connect(db,
    { useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex:true  })
.then(()=>console.log("Mongodb connected ...")).catch(err=>console.log(err))

app.use("/contact-list",router)


const port = process.env.PORT || 5000

app.listen(port,err=>{
    err?console.log("failed to connect"):console.log(`server started on port ${port}....`)
})