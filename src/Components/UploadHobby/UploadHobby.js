import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import UploadButton from '../UploadButton/UploadButton';
import './UploadHobby.css';
import EditIcon from '@material-ui/icons/Edit';
import {v4 as uuid} from 'uuid';
import {addHobby, editHobby} from '../../Slices/HobbySlice';
import { useDispatch } from 'react-redux';
import { DescriptionOutlined } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal({edit, currtitle, currdescription, id}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const dispatch= useDispatch();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [title, updateTitle]= useState('');
  const [description, updateDesciption]= useState('');
  console.log(currdescription)

  function handleUpload(e){
    e.preventDefault();

    if(!edit && title.trim() === ""){
      alert("Title must be provided");
    }else if(!edit && description.length< 150){
      alert('Description must have minimum 150 characters')
    }else if(edit && description.length> 0 && description.length < 150){
      alert('Description must have minimum 150 words');
    }
    else{
      const newHobby= {
        id: id? id : uuid(),
        title:  title.length === 0 ? edit && currtitle: title,
        description: description.length=== 0 ? edit && currdescription: description
      }
      handleClose();
      edit?dispatch(editHobby({hobby: newHobby})) : dispatch(addHobby({hobby:newHobby}));
      updateTitle("");
      updateDesciption("");
    }
  }



  return (
    <div className="uploadHobby">
        {!edit? <div onClick={handleOpen} className="uploadHobby">
            <UploadButton/>
        </div> : <EditIcon className="upload_edit" onClick={handleOpen}/>}
     
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <form onSubmit={handleUpload} >
                <div className="uploadForm">
                    <h4>Title</h4>
                    <input placeholder={edit && currtitle} value={title} onChange={(e) => updateTitle(e.target.value)} type="text"/>
                    <h4>Description(min-150 characters)</h4>
                    <p>{description.length< 150 && `${150- description.length} words needed`}</p>
                    <textarea placeholder={edit && currdescription} value={description} onChange={(e) => updateDesciption(e.target.value)}  id="description" type="text"/>
                    <button onClick={handleUpload} >{edit? "Update": "Create"}</button>
                </div>
               
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}