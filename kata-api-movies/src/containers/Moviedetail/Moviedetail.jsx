import React, { Component } from 'react';
import './Moviedetail.css'
// import MovieComponent from '../../components/MovieComponent';

class Moviedetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: []
        }
    };

    componentDidMount() {
        let resultado = JSON.parse(localStorage.getItem('movie'));
        this.setState({ movie: resultado });
    }
    // componentDidUpdate() {
    //     let resultado = JSON.parse(localStorage.getItem('movie'));
    //     this.setState({ movie: resultado });
    // }

    goBack() {
        this.props.history.push('/');
    }
    showData() {
        if (this.state.movie.id) {
            return (
                <div className='mainDiv'>
                    <h2>Title: {this.state.movie.original_title}</h2>
                    <h1>Release Date: {this.state.movie.release_date}</h1>
                    <h1>Genre: {this.state.movie.name}</h1>
                    <h1>Runtime: {this.state.movie.runtime}</h1>
                    <div className='img'><img alt="poster" width="120" src={'https://image.tmdb.org/t/p/w500' + this.state.movie.poster_path}></img></div>
                </div>
            );
        } else {
            return (
                <div>LOADING MOVIE DATA</div>
            );
        };
    };
    render() {
        return (
            <div>
                {this.showData()}
                <button onClick={() => this.goBack()}>GO BACK TO ALL MOVIES</button>
            </div>
        );
    };
};

export default Moviedetail;