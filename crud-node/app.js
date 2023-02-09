const express = require("express");
const {Pool , Client} = require("pg");

const pool = new Pool();
const PORT = 3000;


const config = {
    user: "postgres",
    password: "12345",
    port: 5431,
    host: "localhost"
};

const client = new Client(config);



client.connect((err) => {
    if (err){
        console.log('connection error - ',err)
        return;
    } else {	
        console.log('Connected')
    }  
})


const app = express();
app.use(express.json())

app.post("/", async (req, res) => {
    resQuery = client.query(`INSERT INTO usuarios (name, age) VALUES ('${req.body.name}', ${req.body.age}) RETURNING *;`);
    const resData = await resQuery;
    res.send(resData.rows[0])
    res.statusCode = 201;
    res.end()
})

app.get("/:id?", (req, res) => {

    if (req.params.id)
        resQuery = client.query(`SELECT * FROM usuarios WHERE userid = ${req.params.id}`)
        .then(
            resRow => resRow.rows.length !== 0 ? res.send(resRow.rows[0]) : res.send({detail: "Not Found"}, statusCode= 404) 
        );

    resQuery = client.query("SELECT * FROM usuarios;")
    .then(resRow => {
        res.send(resRow.rows)
    })
    .catch(e => console.log)
})



app.put("/:id", async (req, res) => {
    let strFields = "";
    let counter=0;
    const size = Object.keys(req.body).length;
    for (let [key, value] of Object.entries(req.body)){
        counter++
        if (key === "name" || key === "age"){
            if (key === "name"){
                if(counter === size){
                    strFields += `${key} = '${value}'`
                    continue;
                }
                else{
                    strFields += `${key} = '${value}', `
                    continue;
                }
            }
            if(counter === size)
                strFields += `${key} = ${value}`; 
            else
                strFields += `${key} = ${value}, `;
        }
        else {
            res.status(400).send({detail: "Bad request"});
            return;
        }
    }

    resQuery = await client.query(`SELECT * FROM usuarios WHERE userid = ${req.params.id}`)
    if (resQuery.rows.length !== 0){
        console.log(strFields)
        resUpdate = client.query(`UPDATE usuarios SET ${strFields} WHERE userid = ${req.params.id}`)
        res.statusCode = 203;
        res.send({});
    }
})

app.delete("/:id", async (req, res) => {
    resQuery = await client.query(`SELECT * FROM usuarios WHERE userid=${req.params.id}`)
    if (resQuery.rows.length !== 0){
        resDelete = client.query(`DELETE FROM usuarios WHERE userid=${req.params.id}`)
        res.statusCode = 204;
        res.send({});
    }
    else {
        res.statusCode = 404;
        res.send({detail: "Not found"})
    }
})



app.listen(PORT,() => console.log(`Rodando na porta ${PORT}`))
