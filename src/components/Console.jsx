import React, { useEffect, useState } from 'react';
import axios from 'axios';
function Console(props) {
    const { id } = props;
    const[console,setConsole] = useState(null);

    useEffect(()=>{
        axios.get('http://csc225.mockable.io/consoles/' + id).then((response) => {
            setConsole(response.data);
    });
    },[]);

    if(!console){
        return <p>Loading Console ID {id} . . .</p>
    }

    return <div class="card">
  <img src={console.image} class="card-img-top" alt={console.name}/>
  <div class="card-body">
    <h5 class="card-title">{console.name} <span class="material-icons">
sports_esports
</span></h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Price: ${console.price}</li>
    <li class="list-group-item">Country: {console.country}</li>
    <li class="list-group-item">Year Released: {console.releaseYear}</li>
  </ul>
</div> 
}

export default Console;