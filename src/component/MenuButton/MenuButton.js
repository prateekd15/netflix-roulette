import './MenuButton.css';
import hoverButton from '../../assets/hover-button.png';
import React, { useState } from 'react';
import DeleteDialog from '../DeleteDialog/DeleteDialog';
import MovieForm from '../MovieForm/MovieForm';
import Dialog from '../Dialog/Dialog';
import { createPortal } from 'react-dom';
import '../../styles/SuccessMessage.css';

function MenuButton(props) {

  const [showConfirmationDialog, setShowConfirmationDialog] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const [edited, setEdited] = useState(false);
  const [showEditDialog, setShowEditDialog] = useState(false);

  const closeEditDialog = () => {
    setShowEditDialog(false);
  };

  const handleEdit = () => {
    setShowEditDialog(true);
  };

  const handleCloseConfirmationDialog = () => {
    setShowConfirmationDialog(false);
  };

  const handleDelete = () => {
    setShowConfirmationDialog(true);
  };

  const handleConfirmDelete = (confirm) => {
    setShowConfirmationDialog(false);
    setDeleted(true);
    setTimeout(() => {
      setDeleted(false);
    }, 2000);
  };

  const handleEditSubmit = (formData) => {
    setEdited(true);
    setShowEditDialog(false);
    setTimeout(() => {
      setEdited(false);
    }, 2000);
  };

    return (
        <div className='movie-tile_hover-button'>
            <img src={hoverButton} alt='Hover Button' />
            <div className="movie-tile_menu-content">
                <a onClick={handleEdit} className='movie-tile_menu-link'>Edit</a>
                <a onClick={handleDelete} className='movie-tile_menu-link'>Delete</a>
            </div>

            {showConfirmationDialog && (
                <>{createPortal(<DeleteDialog
                    show={showConfirmationDialog}
                    onClose={handleCloseConfirmationDialog}
                    onConfirm={handleConfirmDelete}
                    title={props.movieName}
                />, document.body)}</>
            )}
            {showEditDialog && (
                <>{createPortal(
					<Dialog title="Edit Movie" onClose={() => setShowEditDialog(false)}>
                    <MovieForm
                    initialMovieInfo={props}
                    onClose={closeEditDialog}
                    onSubmit={handleEditSubmit}
                />
                </Dialog>,
					document.body
				)}
                </>
                
            )}

            {deleted && (
                <>
                    {createPortal(
                        <div className="success-overlay">
                    <div className="success-dialog">Movie Deleted successfully!</div>
                </div>,
                document.body)}
                </>
            )}
            {edited && (
                <>
                    {createPortal(<div className="success-overlay">
                    <div className="success-dialog">Movie Edited successfully!</div>
                </div>, document.body)}
                </>
            )}
        </div>
     );
}

export default MenuButton;