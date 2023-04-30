const express = require('express')
const route = express.Router()
const connection = require('../config/database')

route.get('/', async (req,res) => {
    
    const [rows, field] = await connection.query("SELECT * FROM new_table;")

    res.send(rows)
})

module.exports = route