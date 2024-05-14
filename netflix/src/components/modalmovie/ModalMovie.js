

function ModalMovie(props){
    const { title, isClicked, overview } = props;

    return (
        <>
           {
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
}

        </>
    )
}

export default ModalMovie;



