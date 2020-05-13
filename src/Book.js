import React, { PureComponent } from 'react';
import BookShelfChanger from './BookShelfChanger';
import noPreview from './No_picture_available.png';
class Book extends PureComponent {
    state = {
        shelf: ''
    }
    onChangeShelf = option => {
        const { bookData } = this.props;
        this.props.onChangeShelf(bookData, option);
    }
    checkThumb = imageLinks => {
        try {
            return typeof imageLinks.thumbnail !== 'undefined' ? `url(${imageLinks.thumbnail})` : '';
        } catch (error) {
            return `url("${noPreview}")`
        }
       
    }
    render() {
        const { authors, id, title, imageLinks, shelf } = this.props.bookData;
        
        return (
            <li key={id}>
                <div className="book">
                    <div className="book-top">
                    <div className="book-cover" style={{ 
                        width: 128, 
                        height: 193, 
                        backgroundImage: this.checkThumb(imageLinks)
                    }}></div>
                        <BookShelfChanger changeShelf={this.onChangeShelf} shelf={shelf}/>
                    </div>
                    <div className="book-title">{ title }</div>
                    <div className="book-authors">
                        <ol>
                            {
                                authors && (
                                    authors.map((author, index) => (
                                        <li key={index}>{author}</li>
                                    ))
                                )
                            }
                        </ol>
                    </div> 
                </div>
            </li>
        );
    }
}

export default Book;