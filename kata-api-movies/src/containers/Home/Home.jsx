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
            const response = await axios.get('https://api.themoviedb.org/3/movie/550?api_key=2f0ee4659e75f22b0645bb580847d157');
            console.log(response.data.results);
            this.setState({ theMovieDB: response.data.results })
        } catch (err) {
            console.log(err);
        }
    }

    showResults() {
        if (this.state.theMovieDB[""]) {
            return (
                this.state.theMovieDB.map(movie => {
                    return (
                        <div className="movie" key={movie.id}>
                            {movie.id}
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