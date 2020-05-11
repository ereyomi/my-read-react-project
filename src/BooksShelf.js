import React from 'react';
import Book from './Book';

const BooksShelf = props => {
    const { shelfKey, shelfs, books } = props;
    return (
        <div key={shelfKey} className="bookshelf">
            <h2 className="bookshelf-title">{shelfs[shelfKey]}</h2>
            <div className="bookshelf-books">
            <ol className="books-grid">
                { books.filter((book) => book.shelf === shelfKey).map((book) => (
                    <Book key={book.id} bookData={book}/>
                ))
                }
            </ol>
            </div>
        </div>
    );
}

export default BooksShelf;