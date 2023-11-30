import React, { useState } from "react";
import "./AddMovie.css";
import { ADD_SUCCESS_MESSAGE, ADD_MOVIE, INCREMENT_SYMBOL } from '../../constants';
import UpdateMovie from "../UpdateMovie/UpdateMovie";
import MessageModal from "../MessageModal/MessageModal";
import axios from "axios";
import { useNavigate} from "react-router-dom";

const AddMovie = ({displayAddMovieDialog}) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const navigate = useNavigate();

  const handleFormSubmit = async (formData) => {
    displayAddMovieDialog(false)
    try {
      const response = await axios.post('http://localhost:4000/movies', formData);
      const newMovieId = response.data.id;
      const urlParams = new URLSearchParams(window.location.search);
      const newUrl = `/${newMovieId}?${urlParams.toString()}`;
      navigate(newUrl);
    } catch (error) {
      console.error('Error adding movie:', error);
    }
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 2000);
  };

  return (
    <div>
      <UpdateMovie
        title={ADD_MOVIE}
        onClose={() => displayAddMovieDialog(false)}
        onSubmit={handleFormSubmit}
      />
      {showSuccessMessage &&
        <MessageModal message={ADD_SUCCESS_MESSAGE} />
      }
    </div>
  );
};

export default AddMovie;
