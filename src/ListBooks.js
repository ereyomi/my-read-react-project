import React, { Component } from 'react';
import CurrentRead from './CurrentRead';
import WantToRead from './WantToRead';
import Read from './Read';
import { Link } from 'react-router-dom';

class ListBooks extends Component {
    render() {
        return (
        <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>

                <CurrentRead />
                <WantToRead />
                <Read />
                
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