const exprees = require('express')
const app =  exprees()
const route = require('./route/name')

const port = 3000

app.get("/", (req,res)=>{
    res.send('gearaline ja')
})

app.use('/database', route)

app.listen(port, ()=>{
    console.log('listening on port', port)
})
