import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Modal from 'react-modal';

function Books() {
  const [data, setData] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://reactnd-books-api.udacity.com/books`, {  //fetching the data from the API
        headers: { Authorization: 'whatever-you-want' },
      })
      .then((res) => {
        setData(res.data.books);
        setFilteredData(res.data.books); // Initially setting filteredData to all books
      })
      .catch((err) => {
        console.log(err.response.status);
        if (err.response.status === 404) {
          console.log('Website not found');
        } else {
          console.log(err);
        }
      });
  }, []);

  const openModal = (book) => {
    setSelectedBook(book);
  }; //To open a modal with the description of the book

  const closeModal = () => {
    setSelectedBook(null);
  }; //To close a modal with the description of the book

  const handleSearch = (searchTerm) => {
    const filteredBooks = data.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filteredBooks);
  }; //For the search bar functionality of filtering boos according to the title

  return (
    <div>
      <Navbar onSearch={handleSearch} />  
      <div className='text-white grid grid-cols-3 gap-5 mt-7'>
        {/* if the searched book is not present we show no books found */}
        {filteredData.length == 0 ? (
          <div className='col-span-3 text-center text-white'>No books found</div>
        ) : (
          // if book is there then we display the book
          filteredData.map((items) => (
            <div key={items.id}>
              <div className='shadow-inner shadow-yellow-500 rounded-lg flex flex-col items-center p-5'>
                <img
                  onClick={() => openModal(items)}
                  src={items.imageLinks.smallThumbnail}
                  alt='thumbnail'
                ></img>
                <br />
                <h4 className='text-center'>{items.title}</h4>
                <p>Free</p>
              </div>
              {/* the modal design */}
              <Modal className="bg-black" isOpen={!!selectedBook} onRequestClose={closeModal} contentLabel='Books Description'
                style={{
                  overlay: {
                    backgroundColor: ' '
                  },
                  content: {
                    width: '50%',
                    margin: 'auto',
                    borderRadius: '10px',
                    padding: '20px'
                  }
                }}>
                {selectedBook && (
                  <div className='bg-yellow-500 p-5 rounded-md  max-w-screen-sm mx-auto'>
                    <button className='text-white' onClick={closeModal}>X</button>
                    <h2 className='text-center text-white text mb-5'>{selectedBook.title}</h2>
                    <p className='text-sm'>{selectedBook.description}</p>
                  </div>
                )}
              </Modal>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Books;
