import React from 'react';

class Moviedetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedMovie: {}
        }
    };

    componentDidMount() {
        let res = JSON.parse(localStorage.getItem('movieData'));
        this.setState({ selectedMovie: res });
    }
    goBack() {
        this.props.history.push('/');
    }
    showData() {
        if (this.state.selectedMovie?.id) {
            return (
                <div>
                    <div>Title: {this.state.selectedMovie.original_title}</div>
                    <div>Release Date: {this.state.selectedMovie.release_date}</div>
                    <div>Genre: {this.state.selectedMovie.genres.name}</div>
                    <div>Runtime: {this.state.selectedMovie.runtime}</div>
                    <div><img src={this.state.selectedMovie.poster_path}></img></div>
                </div>
            )
        } else {
            return (
                <div>LOADING MOVIE DATA</div>
            )
        }
    }
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