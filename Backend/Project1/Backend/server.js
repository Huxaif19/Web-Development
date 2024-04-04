import express from "express";
const app = express(); 
const port = process.env.PORT || 5000;


app.get('/', (req,res)=> res.send('server is ready'));
app.get('/api/jokes', (req,res)=>{
    const jokes = [
        {
          "id": 1,
          "title": "First Object",
          "content": "This is the content of the first object."
        },
        {
          "id": 2,
          "title": "Second Object",
          "content": "This is the content of the second object."
        },
        {
          "id": 3,
          "title": "Third Object",
          "content": "This is the content of the third object."
        }
    ];
    res.send(jokes)
})

app.listen(port , ()=>{
    console.log(`server at http://localhost:${port}`)
})

