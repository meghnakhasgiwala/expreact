import express from 'express';
import "dotenv/config";
import cors from 'cors';
const PORT=process.env.PORT || 5100

const app = express();
//middleware
//if u dont write name in cors means it is allwoing everyone
app.use(cors());

//Routing
let Users=[
    {id:1,name: 'John Doe'},
    {id:2,name: 'Jack Smith'},
    {id:3,name: 'Jane Doe'},
    {id:4,name: 'Alice Johnson'},
    {id:5,name: 'Bob Brown'},
    {id:6,name: 'Charlie Davis'},
    {id:7,name: 'David Wilson'},
    {id:8,name: 'Emily Thompson'},
    {id:9,name: 'Frank Miller'},
    {id:10,name: 'Grace Lee'},
]


app.get('/api/data', (req, res) => {
  res.json({"Users":Users});
});

//Server configuration

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

// add a new user
