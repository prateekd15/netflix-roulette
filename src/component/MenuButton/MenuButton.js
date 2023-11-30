import './MenuButton.css';
import hoverButton from '../../assets/hover-button.png';
import React, { useState } from 'react';
import DeleteMovie from '../DeleteDialog/DeleteMovie';
import { DELETE_MOVIE_MESSAGE, EDIT_MOVIE_MESSAGE, EDIT, DELETE, EDIT_MOVIE } from "../../constants";
import MessageModal from '../MessageModal/MessageModal';
import UpdateMovie from '../UpdateMovie/UpdateMovie'; 
import axios from 'axios';

function MenuButton(props) {

  const [showConfirmationDialog, setShowConfirmationDialog] = useState(false);
  const [deleted, setDeleted] = useState(false);

  

  const handleEdit = () => {
    props.onEditClick(props.id);
  };

  const handleCloseConfirmationDialog = () => {
    setShowConfirmationDialog(false);
  };

  const handleDelete = () => {
    setShowConfirmationDialog(true);
  };

  const handleConfirmDelete = async (formData) => {
    try {
      const response = await axios.delete(`http://localhost:4000/movies/${props.id}`);
      const urlParams = new URLSearchParams(window.location.search);
      window.location.reload();
    } catch (error) {
      console.error('Error adding movie:', error);
    }
    setShowConfirmationDialog(false);
    setDeleted(true);
    setTimeout(() => {
      setDeleted(false);
    }, 2000);
  };

 
  return (
    <div className='movie-tile_hover-button'>
      <img src={hoverButton} alt='Hover Button' />
      <div className="movie-tile_menu-content">
        <a onClick={handleEdit} className='movie-tile_menu-link'>{EDIT}</a>
        <a onClick={handleDelete} className='movie-tile_menu-link'>{DELETE}</a>
      </div>

      {showConfirmationDialog && (
        <DeleteMovie
          onConfirm={handleConfirmDelete}
          onClose={handleCloseConfirmationDialog}
        />
      )}
      {deleted && (
        <MessageModal message={DELETE_MOVIE_MESSAGE} />
      )}
    </div>
  );
}

export default MenuButton;