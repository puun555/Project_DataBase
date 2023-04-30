const exprees = require('express')
const app =  exprees()
const mysql = require('mysql2')

const port = 5500

app.use(exprees.json());

const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '123456',
    database: 'project_d'
});

connection.connect((err)=>{
    if(err) throw err;
    console.log('connected to database')
});

app.get('/flight', async (req,res)=>{
    const {flight_number, departure_airport, arrival_airport, departure_time, arrival_time} = req.body
    try {
        connection.query(`SELECT * FROM flight;`,
        [flight_number, departure_airport, arrival_airport, departure_time, arrival_time], 
        (err, result, field)=>{
            if(err) {
                console.log(err); 
                return res.status(400).send();
            }
            return res.status(200).send(result);
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send('server error')
    }
})


app.get('/meal', async (req,res)=>{
    const {meal_id, meal_name} = req.body
    try {
        connection.query(`SELECT * FROM customers;`,
        [meal_id, meal_name], 
        (err, result, field)=>{
            if(err) {
                console.log(err); 
                return res.status(400).send();
            }
            return res.status(200).send(result);
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send('server error')
    }
})

app.get('/order', async (req,res)=>{
    const {order_id, order} = req.body
    try {
        connection.query(`SELECT * FROM customers;`,
        [order_id, order], 
        (err, result, field)=>{
            if(err) {
                console.log(err); 
                return res.status(400).send();
            }
            return res.status(200).send(result);
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send('server error')
    }
})


app.post('/create', async (req,res)=>{
    const {id, firstName, lastName} = req.body
    try {
        connection.query(`insert into new_table (id, firstName, lastName) values (?,?,?)`,
        [id, firstName, lastName], 
        (err, result, field)=>{
            if(err) {
                console.log(err); 
                return res.status(400).send();
            }
            return res.status(200).json({message: 'success create'});
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send('server error')
    }
})


app.listen(port, ()=>{
    console.log('listening on port', port)
})
