import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function ModalMovie(props){
    const { show,handleClose,movie,src} = props;
//console.log(isClicked);
//console.log(movie.poster_path);
    return (
        <>
         {/*}  {
    isClicked ? (
        
        <>
            <h4>{title}</h4>
            <p>{overview}</p>
            <textarea
                rows="3"
                cols="30"
                className="text-area"
                placeholder="Write something..."
            ></textarea>
            
        </>
    ) : null
}{*/}

<Modal show={show} onHide={handleClose} centered>
      <div className="modal">
        <Modal.Header closeButton className="modal-header">
          <Modal.Title className="modal-title">{movie.title}</Modal.Title>
        </Modal.Header>
        <div className="modal-content">
          <img src={src} alt="Movie" className="modal-image" />
          <div className='scroll'>
          <p>{movie.overview}</p></div>
        </div>
        <Modal.Footer className="modal-footer">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </div>
    </Modal>

</>);}
export default ModalMovie;



