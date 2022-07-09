import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Character = ({ resident }) => {
    
    const [character, setCharacter] = useState({});
    const [status, setStatus] = useState(character.status)
    const thestatus = () =>{

        if(status==="Dead"){
            return(
               setStatus(<p> <p className="card-text">Status: Dead </p></p>) 
            )
           
        } else if(status==="unknow"){
            return (   
                <p> <p className="card-text">Status: Unknow </p></p>
            )

        } else (status==="Alive");{
            return (
                <p> <p className="card-text">Status: Alive </p></p>
            )
        }

    }

    useEffect(()=>{
        axios.get(resident)
        .then(res=>setCharacter(res.data))

    },[])
  
    console.log(character)


  
  
    return (
        <div className='Character-Card row align-items-start'>
           
           {/* <img src={character.image} alt="" />
           <h3>{character?.name}</h3>
           <p>Race:{character.species}</p>
           <p>Origin: {character.origin?.name}</p>
           <p>Number of Episodes: {character.episode?.length}</p> */}

           <div className="card mb-3" >
  <div className="row g-0 ">
    <div className="col-md-4 img-char">
      <img src={character.image} alt="" />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{character.name}</h5>
        <p className="card-text">Race: {character.species}</p>
        <p className="card-text">Origin: {character.origin?.name}</p>
        <p className="card-text">Appearance in episodes: {character.episode?.length}</p>
        <p className="card-text">Status: {character.status}</p>
        <p>{thestatus}</p>

       
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Character; 