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

app.get('/customer', async (req,res)=>{
    try {
        connection.query(`SELECT * FROM customer;`,
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

app.get('/flight', async (req,res)=>{
    try {
        connection.query(
            `SELECT fg.*, fb.flight_number"back_flight", fb.departure_airport"back_airport",  
            fb.arrival_airport"back_desairport" , fb.departure_time"back_time", fb.arrival_time"back_arrivaltime" FROM flight fg
            left outer join flight fb
            ON (fg.arrival_airport = fb.departure_airport and fb.arrival_airport = fg.departure_airport );`
            , 
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
    try {
        connection.query(`SELECT * FROM meal;`,
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

app.post('/order', async (req,res)=>{
    const {customer_id, flight_id, seat_number, meal_id, payment_id} = req.body
    try {
        connection.query(`INSERT INTO orders (customer_id, flight_number, order_time, seat_number, meal_id, payment_id) VALUES (?, ?, CURRENT_TIMESTAMP, ?, ?, ?);`,
        [customer_id, flight_id, seat_number, meal_id, payment_id], 
        (err, result, field)=>{
            if(err) {
                console.log(err); 
                return res.status(400).send();
            }
            return res.status(200).send("Yes");
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send('server error')
    }
})

app.get('/order', async (req,res)=>{
    try {
        connection.query(`
        select order_time, order_id, concat(c.first_name, ' ', c.last_name)"Customer_name",
        seat_number "Seat",
        f.flight_number"Flight", 
        concat(ad.airport_name,' (',f.departure_airport ,')')"Departure Airport", 
        concat(aa.airport_name,' (',f.arrival_airport ,')')"Arrival Airport",
        f.departure_time"Take Off Time", f.arrival_time"Landing Time", 
        m.meal_name"Your Meal", 
        p.payment_price"Price"
        from orders
        JOIN customer c
        USING (customer_id)
        JOIN flight f
        USING (flight_number)
        JOIN meal m
        USING (meal_id)
        JOIN payments p
        USING (payment_id)
        JOIN airport ad
        ON (f.departure_airport = ad.airport_code)
        JOIN airport aa
        ON (f.arrival_airport = aa.airport_code)
        `,
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




app.listen(port, ()=>{
    console.log('listening on port', port)
})
