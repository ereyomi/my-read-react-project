import React, { Component } from 'react';
import BooksShelf from './BooksShelf';
import { Link } from 'react-router-dom';

class ListBooks extends Component {
    constructor(props){
        super(props)
        this.state = {
            shelfs: {
                currentlyReading: 'Currently Reading',
                wantToRead: 'Want To Read',
                read: 'Read',
            },
        }
    }
    render() {
        const { shelfs } =  this.state;
        const shelfsKeys = Object.keys(shelfs);
        return (
        <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                {
                    shelfsKeys.map((shelfKey) => (
                        <BooksShelf 
                        key={shelfKey} 
                        books={this.props.books} 
                        shelfKey={shelfKey}
                        shelfs={shelfs}
                        />
                    ))
                    
                }
                
              </div>
            </div>

            <div className="open-search">
                <Link to="/search">Close</Link>
            </div>
          </div>
        );
    }
}

export default ListBooks;