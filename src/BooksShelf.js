import React, { Component } from 'react';
import Book from './Book';

class BooksShelf extends Component {
    handleShelfChange = (book, shelfoption) => {
        this.props.handleShelfChange(book, shelfoption);
    }
    render() {
        const { shelfKey, shelfs, books } = this.props;
        return (
            <div key={shelfKey} className="bookshelf">
                <h2 className="bookshelf-title">{shelfs[shelfKey]}</h2>
                <div className="bookshelf-books">
                <ol className="books-grid">
                    { 
                        books.filter((book) => book.shelf === shelfKey).map((book) => (
                        <Book key={book.id} bookData={book} onChangeShelf={this.handleShelfChange}/>
                        ))
                    }
                </ol>
                </div>
            </div>
        );
    }
}

export default BooksShelf;