import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';
import { debounce } from './Debounce';
class Search extends Component{
    handleSearchChange = debounce((text) => {
      this.props.onSearchBooks(text);
     }, 1000)

    handleShelfChange = (book, shelf) => {
      this.props.handleShelfChange(book, shelf);
    }    
    render() {
        const { searchResult } =  this.props;
        return (
            <div className="search-books">
              <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                <div className="search-books-input-wrapper">
                  {/*
                    NOTES: The search from BooksAPI is limited to a particular set of search terms.
                    You can find these search terms here:
                    https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
  
                    However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                    you don't find a specific author or title. Every search is limited by search terms.
                  */}
                  <div>
                    <input 
                        type="text" 
                        placeholder="Search by title or author"
                        name="search"
                        onChange={(event) => this.handleSearchChange(event.target.value)}
                    />
                  </div>
  
                </div>
              </div>
              <div className="search-books-results">
                <ol className="books-grid">
                    { 
                      searchResult.length !== 0 ? (searchResult.map((book, index) => (
                        <Book key={index} bookData={book} onChangeShelf={this.handleShelfChange}/>
                      ))
                       ) : (<p>no result</p>)
                    }   
                </ol>

              </div>
            </div>
        );
    }
    
}

export default Search;