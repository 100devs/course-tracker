const express = require('express')
const session = require('express-session')

// saves express function to the variable app
const app = express()

// sets up boilerplate routes to access the database
app.use('/api', getRoutes)
app.use('/api/post', postRoutes)
app.use('/api/auth', authRoutes)

// Code that tells heroku where to find react build files
if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, '/client/build')))
  
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
    })
  }else{
    app.get('/', (req, res) => {
        res.send('Api running')
    })
}

app.listen(process.env.PORT || 5000, ()=>{
    console.log('Server is running, you better catch it!')
}) 
