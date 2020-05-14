import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom';
import Search from './Search';
import ListBooks from './ListBooks';


class App extends React.Component {
  state = {
    books: [],
    searchResult: [],
    searchData:[]
  }
  handleSetState = (key, data) => {
    this.setState(() => (
      {
        [key]: [...data]
      }
    ))
  }
  componentDidMount = () => {
    this.getBooks();
  }
  getBooks = () => {
    BooksAPI.getAll()
    .then((data) => {
      this.handleSetState('books', data)
    })
  }
  handleShelfChange = ( book, shelfChangeoption ) => {
    BooksAPI.update(book, shelfChangeoption)
    .then((data) => {
      this.getBooks();
      }
    );
  }
  searchForBooks = query => {
    BooksAPI.search(query)
    .then((data) => {
      if (this.checkDataExist(data)) {
        this.checkIfShelfBookExistInSearch(data);
      } else {
        this.handleSetState('searchResult', []);
      }
    })
  }
  checkDataExist = data => {
    try{
      return data.error ? false : true;
    }catch(error){
      return false;
    }
  }
  checkIfShelfBookExistInSearch = dataReceived => {
    const { books } = this.state;
    books.forEach((book, index) => {
      let bookindex = dataReceived.findIndex(data => data.id === book.id);
      if ((bookindex > -1)) { dataReceived.splice(bookindex, 1, book) }
    });
    this.handleSetState('searchResult', dataReceived);
  }
  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <ListBooks books={this.state.books} handleShelfChange={this.handleShelfChange}/>
        )} />
        <Route exact path='/search' render={() => (
          <Search onSearchBooks={this.searchForBooks} 
          searchResult={this.state.searchResult} 
          handleShelfChange={this.handleShelfChange}/>
        )} />
      </div>
    );
  }
}

export default App;
