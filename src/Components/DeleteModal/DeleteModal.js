import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import './DeleteModal.css';
import DeleteIcon from '@material-ui/icons/Delete';
import { deleteHobby, selectHobbies } from '../../Slices/HobbySlice';
import { useDispatch, useSelector } from 'react-redux';


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
    display: 'flex'
  },
}));

export default function TransitionsModal({id}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const hobbies= useSelector(selectHobbies);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = (event) => {
    event.preventDefault();

    dispatch(deleteHobby({id: id}));
   
  }



  return (
    <div className="uploadHobby">
        <div onClick={handleOpen} className="uploadHobby">
            <DeleteIcon className="modalDelete_button" onClick={handleOpen}/>
        </div>
     
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
            <form >
                <div className="uploadForm">
                    <p>Are you sure you want to delete?</p>
                    <div className="delete_confirmation">
                        <button onClick={handleDelete}>Delete</button>
                        <button onClick={handleClose}>Cancel</button>
                    </div>
                </div>
               
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}