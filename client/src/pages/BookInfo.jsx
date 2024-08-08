import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const BookInfo = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:5001/bookdata/book_data/${id}`)
      .then(response => {
        console.log("Hello")
        setBook(response.data[0]); // Assuming the response is an array with one book object
        setLoader(false);
      })
      .catch(error => {
        console.error('Error fetching book info:', error);
        setLoader(false);
      });
  }, [id]);

  if (loader) return <h1>Loading...</h1>;

  return (
    <div>
      {book ? (
        <div>
          <h1>{book.bookname}</h1>
          <p>id: {book.id}</p>
          <p>Book name: {book.booname}</p>
          <p>Author: {book.author}</p>
          {/* Add more details as needed */}
        </div>
      ) : (
        <h1>No book found</h1>
      )}
    </div>
  );
};

export default BookInfo;
