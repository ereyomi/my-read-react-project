import React from 'react';
import BookShelfChanger from './BookShelfChanger';

const Book = props => {
    const { id, title, authors, imageLinks } = props.bookData;
    return (
        <li key={id}>
            <div className="book">
                <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${imageLinks.thumbnail})` }}></div>
                    <BookShelfChanger />
                </div>
                <div className="book-title">{ title }</div>
                <div className="book-authors">
                    <ol>
                        {
                            authors.map((author) => (
                                <li key={author}>{author}</li>
                            ))
                        }
                    </ol>
                </div>
            </div>
        </li>
    );
}

export default Book;