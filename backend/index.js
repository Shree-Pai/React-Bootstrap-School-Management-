const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
// const bodyParser = require("body-parser")
const app = express()
const Routes = require("./routes/route.js")

const PORT = process.env.PORT || 5000

dotenv.config();

// app.use(bodyParser.json({ limit: '10mb', extended: true }))
// app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }))

app.use(express.json({ limit: '10mb' }))
app.use(cors())

// mongoose
//     .connect(process.env.MONGO_URL, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     })
//     .then(console.log("Connected to MongoDB"))
//     .catch((err) => console.log("NOT CONNECTED TO NETWORK", err))
app.use('/', Routes);

app.listen(PORT, () => {
    console.log(`Server started at port no. ${PORT}`)
})
const DB='mongodb+srv://shreepai123:Shreepai%4004@cluster0.jhoj67t.mongodb.net/'
mongoose.connect(DB,{
    useNewUrlParser:true,
}).then(()=>{
    console.log('Database connected.......')
})


