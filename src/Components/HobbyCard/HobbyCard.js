import './HobbyCard.css';
import React from 'react'
import DeleteModal from '../DeleteModal/DeleteModal';
import UploadHobby from '../UploadHobby/UploadHobby';

function HobbyCard({id, title, description}) {
    return (
        <div className="hobbyCard">
            <div className="hobbyCard_info">
                <div className="hobbyCard_title">
                    <h1>{title}</h1>
                </div>
                <div className="hobbyCard_description">
                    <p >{description}</p>
                </div>

            </div>

            <div className="hobbyCard_functions">
                <DeleteModal id={id}/>
                <UploadHobby id={id} currtitle={title} currdescription={description} edit={true}/>
            </div>
        
        </div>
    )
}

export default HobbyCard
