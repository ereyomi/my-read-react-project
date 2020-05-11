import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom';
import Search from './Search';
import ListBooks from './ListBooks';


class App extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: []
  }
  componentDidMount = async() => {
    await BooksAPI.getAll()
    .then((data) => {
      this.setState((currentState) => (
        {
          books: currentState.books.concat(data)
        }
      ));
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <ListBooks books={this.state.books}/>
        )} />
        
        <Route exact path='/search' component={Search} />
      </div>
    );
  }
}

export default App;
