
const express = require("express")
const app = express();
const movieData = require("./init/database")
const isConnected = require("./init/database")
const cors = require('cors')
app.use(cors())

const port = process.env.PORT || 3000 

app.get('/ping',(req,res)=>{
    res.send("hello express!")
})

app.listen(port,()=>{
    console.log(`server running in port ${port}`)
})

app.use(express.json())

// Define the ping route
app.get('/data', (req, res) => {
  res.send(movieData);
});
app.post('/data/api', (req, res) => {
  let body=req.body
  res.status(201).json({
    message:"Post Request Success",
    data:body
})

});

const router = require("./routes")
app.use('/api',router)



// for displaying the connection status 
app.get('/', async (req, res) => {
  // const dbStatus = isConnected ? 'connected' : 'disconnected';
  res.send({
    // database: dbStatus,
    message : welcome,
  });
});

