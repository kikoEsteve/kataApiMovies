import React, { Component, Fragment } from 'react';
import './Home.css';
import axios from 'axios';
import MovieComponent from '../../components/MovieComponent';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            page: 1
        }
    };
    //Accedemos a la api via axios usando el componentDidMount
    componentDidMount() {
        axios.get(`https://api.themoviedb.org/3/movie/` + `popular?api_key=2f0ee4659e75f22b0645bb580847d157&language=en-US&page=${this.state.page}`)
            .then((api) => {
                this.setState({ movies: api.data.results })
            })
    } catch(err) {
        console.log(err);
    };
    //Si queremos que los cambios realizados se pinten en la app, debemos actualizar. Ejemplos: previousPage, nextPage..
    componentDidUpdate() {
        axios.get(`https://api.themoviedb.org/3/movie/` + `popular?api_key=2f0ee4659e75f22b0645bb580847d157&language=en-US&page=${this.state.page}`)
            .then((api) => {
                this.setState({ movies: api.data.results })
            })
    } catch(err) {
        console.log(err);
    };

    //Añadimos la lógica para cambiar de página anterior
    previousPage = () => {
        this.setState({ page: this.state.page - 1, })
        console.log(this.state.page)
    };

    //Añadimos la lógica para cambiar a la página siguiente
    nextPage = () => {
        this.setState({ page: this.state.page + 1, })
    };

    showResults() {
        return (
            <Fragment>
                <div>
                    <button onClick={this.previousPage}> Anterior </button>
                    <button onClick={this.nextPage}> Siguiente </button>
                </div>
                <div className="general">
                    {
                        this.state.movies.map(item => <MovieComponent item={item} history={this.props.history} />)
                    }
                </div>
            </Fragment>
        )
    };

    clickSelectedElement(movie) {
        this.props.history.push('./Moviedetail');
        localStorage.setItem('movieData', JSON.stringify(movie));
    };

    render() {
        return (
            <div>
                {this.showResults()}
            </div>
        );
    };
};

export default Home;