import React, {useState,useEffect} from 'react'
import './App.css'

export default function App() {
  const [Data,setData]=useState([]);
  useEffect(() => {
    async  function GetUsers() {
      const response = await fetch('http://localhost:5500/api/data');
      const data = await response.json();
      //Data has Users array in it
      console.log(data.Users);
      setData(data.Users);

    }
    GetUsers();
  },[]);


  return (
    <div>
      <center>
        <h1>HELLO</h1>
        <hr/>
        {
        Data.map(User=> (
          <div key={User.id}>
            <h2>{User.id}</h2>
            <h2>{User.name}</h2>
          </div>
        ))
        }  

      </center>
    </div>
  )
}
