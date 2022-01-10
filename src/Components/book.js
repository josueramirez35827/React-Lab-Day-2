function book(props) {
  return (
    <div className="book-container">
      <h1 className="book-title">{props.title}</h1>
      <div className="book-info">
        <img className="book-image" src={props.image} alt="book-image" />
        <h3 className="book-description">{props.description}</h3>
      </div>
    </div>
  );
}

export default book;