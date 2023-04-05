const exprees = require('express')
const app =   exprees()

const port = 5959

app.listen(port, ()=>{
    console.log('listening on port', port)
})