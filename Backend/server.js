const express = require('express')
const env = require('dotenv')
env.config()
const cors = require('cors')

const skillRouter = require('./routes/skill.routes')
const app = express()
const db = require('mongoose')
const adminRouter = require('./routes/admin.routes')
db.connect('mongodb://127.0.0.1:27017/portfolio').then(()=>{
    console.log('connected to the database')
})
const cookieParser = require('cookie-parser')
const emailRouter = require('./routes/mails.routes')
const testimonialRouter = require('./routes/testimonials.routes')
const logIP = require("./middlewaare/logIP")
const updatesRouter = require('./routes/updates.routes')
const projectRouter = require('./routes/projects.routes')
app.use(cookieParser())
app.use(express.json())
app.use(cors({
     origin: 'http://localhost:5173', 
    credentials: true, 
  }));
app.use(logIP);
app.use('/api/projects',projectRouter)
app.use('/api/updates',updatesRouter)
app.use('/api/skills',skillRouter)
app.use('/api/emails',emailRouter)
app.use('/api/admin',adminRouter)
app.use('/api/testimonials',testimonialRouter)
app.listen(process.env.PORT,()=>{
    console.log('server listening to port : ',process.env.PORT || 5000)
})