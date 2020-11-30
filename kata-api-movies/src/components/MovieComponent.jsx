import React, { Component } from 'react';
import './MovieComponent.css';

class MovieComponent extends Component {
    constructor(props) {
        super(props);
    }
    selectedMovie(movie) {
        console.log("No se donde esta la movie", movie);
        localStorage.setItem('movie', JSON.stringify(movie));
        this.props.history.push('/Moviedetail');
    }
    render() {
        return (
            <div key={this.props.item.id}>
                <p>{this.props.item.original_title}</p>
                <img className='movieImage'
                    onClick={() => this.selectedMovie(this.props.item)}
                    src={'https://image.tmdb.org/t/p/w500' + this.props.item.poster_path}
                    alt=""></img>
            </div>
        )
    }
}

export default MovieComponent;