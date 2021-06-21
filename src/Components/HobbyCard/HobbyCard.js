import './HobbyCard.css';
import React from 'react'
import DeleteModal from '../DeleteModal/DeleteModal';
import UploadHobby from '../UploadHobby/UploadHobby';
import Avatar from '@material-ui/core/Avatar';
import {selectUser} from '../../Slices/userSlice';
import {useSelector} from 'react-redux';


function HobbyCard({id, title, description}) {


    const user= useSelector(selectUser);


    return (
        <div className="hobbyCard">
            <div className="hobbyCard_info">
                <div className="hobbyCard_title">
                    <Avatar className="hobbyCard_title_image" src={user.user.photoURL}/>
                    <h1>{user.user.displayName}</h1>
                </div>
                <div className="hobbyCard_description">
                    <h2>Hobby: {title}</h2>
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
