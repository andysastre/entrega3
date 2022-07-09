import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import Character from './Character';

const Card = () => {

    const [data, setData] = useState({})
    const [searchValue, setSearchValue] = useState("");

    useEffect(() => {

        let random = Math.floor(Math.random() * 125) + 1;
        axios.get(`https://rickandmortyapi.com/api/location/${random}`)
            .then(res => {
                setData(res.data)
            });
    }, []
    )

    const searchLocation = () => {
        axios.get(`https://rickandmortyapi.com/api/location/${searchValue}`)
            .then(res => setData(res.data))

    }



    return (

      
           

            <div className='search' >



                <h1>Rick and Morty Wiki</h1>

                <input type="text" placeholder='Type a location' value={searchValue} onChange={e => setSearchValue(e.target.value)} />
                <button onClick={searchLocation}>Search Location</button>
                <h3>  {data.name} </h3>
                <p><strong>Type: </strong>{data.type} <strong>Dimension: </strong>{data.dimension} <strong>Population: </strong>{data.residents?.length}</p>

                <ul>
                    {data.residents?.map((resident) => (
                        <Character resident={resident} key={resident} />

                    ))

                    }

                </ul>
            </div>
     
    );
};

export default Card;