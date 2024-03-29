import React from 'react';//imr,  para autocompletar
import Heroe from './Heroe';

const HeroeList=({heroelist})=> (
    <div className= "card mt-2 py-5">
        <div className="card-body">
            <h2 className="card-title text-center mb-5"> to administer the heros here</h2>
            <div className="list-heroes">
                {heroelist.map(heroe => (
                    //para llamr al componente
                    <Heroe
                        key={heroe.id}
                        heroe={heroe}
                    />
                ))}
            </div>
        </div>
    </div>
);

export default HeroeList;