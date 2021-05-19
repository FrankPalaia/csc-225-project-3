import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Console from './Console';

function Consoles() {
    const [consoles, setConsoles] = useState([]);
    const[selectedConsole, setSelectedConsole] = useState(null);
    useEffect(()=>{
        axios.get('http://csc225.mockable.io/consoles').then((response) => {
            setConsoles(response.data);
        }); 
    },[]);

    if(consoles.length === 0){
        return <p>Loading . . . <span class="material-icons">
        cached
        </span></p>;
    }

    if(!!selectedConsole){
        return (
        <div>
            <Console id={selectedConsole} />
            <button type="button" class="btn btn-danger btn-lg" onClick={()=>setSelectedConsole(null)}>Reset <span class="material-icons">
videogame_asset_off
</span></button>
        </div>
        );
    }
    return (
    <div>
        {consoles.map((console)=>{
        return (
            <p key={console.id}>
        
            <div class="card">
  <img src={console.image} class="card-img-top" alt={console.name}/>
  <div class="card-body">
    <h5 class="card-title">{console.name}</h5>
    <a href="#" class="btn btn-primary btn-lg btn-block stretched-link" onClick={() => setSelectedConsole(console.id)}>Learn More</a>
  </div>
</div>
            </p>
        );
    })}
    </div>
    );
}

export default Consoles;