import "./CardShowcase.css";
import React from 'react';
import HobbyCard from "../HobbyCard/HobbyCard";
import {useSelector} from 'react-redux';
import {selectHobbies} from '../../Slices/HobbySlice';

function CardShowcase() {
    const hobbies= useSelector(selectHobbies);


    return (
        <div className="cardShowcase">
            
                {hobbies.map(hobby => (
                    <HobbyCard 
                        key={hobby.id}
                        title={hobby.title}
                        description={hobby.description}
                        id={hobby.id}
                    />
                ))}
            
        </div>
    )
}

export default CardShowcase
