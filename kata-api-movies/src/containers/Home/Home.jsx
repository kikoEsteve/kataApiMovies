import React from 'react';
import './Home.css';
import axios from 'axios';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theMovieDB: []
        }
    };

    async componentDidMount() {
        try {
            const res = await axios.get('https://developers.themoviedb.org/3/movies/get-movie-details');
            console.log(res.data.results);
            this.setState({ theMovieDB: res.data.results })
        } catch (err) {
            console.log(err);
        }
    }

    showResults() {
        if (this.state.theMovieDB[0]) {
            return (
                this.state.theMovieDB.map(movie => {
                    return (
                        <div className="movie" key={movie.id}>
                            {movie.original_title}
                            <img onClick={() => this.clickSelectedElement(movie)} alt={movie.name} src={movie.image}></img>
                            {movie.release_date}
                        </div>
                    )
                })
            )
        } else {
            return (
                <div>LOADING..</div>
            )
        }
    }

    clickSelectedElement(movie) {
        this.props.history.push('/Moviedetail');
        localStorage.setItem('movieData', JSON.stringify(movie));
    }

    render() {
        return (
            <div>
                {this.showResults()}
            </div>
        );
    };
};

export default Home;