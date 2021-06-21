import "./CardShowcase.css";
import React from 'react';
import HobbyCard from "../HobbyCard/HobbyCard";
import {useSelector} from 'react-redux';
import {selectHobbies} from '../../Slices/HobbySlice';
import {selectUser} from '../../Slices/userSlice';

function CardShowcase() {
    const hobbies= useSelector(selectHobbies);
    const user= useSelector(selectUser);

    return (
        <div className="cardShowcase">
            <div className="cardShowcase__greetings">
                <h5>Welcome {user.user.displayName}, you can create and see your hobbies</h5>
            </div>
            <div className="cardShowcase__cards">
                {hobbies.map(hobby => (
                    <HobbyCard 
                        key={hobby.id}
                        title={hobby.title}
                        description={hobby.description}
                        id={hobby.id}
                    />
                ))}
            </div>
        </div>
    )
}

export default CardShowcase
