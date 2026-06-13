const mongoose=require('mongoose')

async function connecToDB() {
    try {
       mongoose.connect(process.env.MONGO_URI)

       console.log("Connected to Database") 
    } catch (error) {
        console.log(err);
        
    }
}

module.exports = connecToDB