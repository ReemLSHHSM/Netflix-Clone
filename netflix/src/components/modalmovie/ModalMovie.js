import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FavList from '../favlist/FavList';


function ModalMovie(props) {
  const { show, handleClose, movie, src } = props;

  // State for the textarea value
  const [textArea, setTextArea] = useState('');

  // Event handler for textarea change
  const handleTextChange = (event) => {
    setTextArea(event.target.value);
  };

  const addData = (movie, textArea) => {
    const addUrl = 'https://render-host-ih2q.onrender.com/addMovies';
  
    const data = {
      id: movie.id,
      title: movie.title,
      release_date: movie.release_date,
      poster_path: movie.poster_path,
      overview: movie.overview,
      comment: textArea
    };
  
    fetch(addUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Data was added successfully!', data);
    })
    .catch(error => {
      console.log(error);
    });
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <div className="modal-content">
          <Modal.Header closeButton className="modal-header">
            <Modal.Title className="modal-title">{movie.title}</Modal.Title>
          </Modal.Header>
          <div className="modal-body">
            <img src={src} alt="Movie" className="modal-image" />
            <div className="scroll">
              <p>{movie.overview}</p>
            </div>
            <textarea
              name="message"
              rows="5"
              cols="35"
              placeholder="Comment here..."
              className="modal-textarea"
              value={textArea} // Use textArea state variable here
              onChange={handleTextChange} // Correct the event handler name
            />
          </div>
          <Modal.Footer className="modal-footer">
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={() => addData(movie,addData)}>
              Submit
            </Button>
          </Modal.Footer>
        </div>
      </Modal>
      <FavList movie={movie}/>
    </>
  );
}

export default ModalMovie;





