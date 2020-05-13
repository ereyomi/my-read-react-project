import React, { Component } from 'react';


class BookShelfChanger extends Component {
    constructor(props){
        super(props)
        this.state = {
            shelfOption: ''
        }
        this.onChangeMyshelf = this.onChangeMyshelf.bind(this);
    }
    
    setShelfOptionState = data => {
        new Promise((resolve, reject) => {
            this.setState({
                shelfOption: data
            })
            resolve(true);
        });        
    }
    onChangeMyshelf = async(event) => {
        const selectedOption = event.target.value;
        try {
            await this.setShelfOptionState(selectedOption);
        } catch (error) {
            console.log(error)
        }
        this.props.changeShelf(this.state.shelfOption);
    }
    componentDidMount = () => {
        this.setState({
            shelfOption: this.props.shelf
        })
    }
    render() {
        const { shelfOption } = this.state;
        return (
            <div className="book-shelf-changer">
                <select 
                value={shelfOption}
                onChange={this.onChangeMyshelf}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        );
    }
}

export default BookShelfChanger;