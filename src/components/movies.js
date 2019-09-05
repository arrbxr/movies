import React, { Component } from "react";
import Like from "../common/like";
import { getMovies } from "../services/fakeMovieService";

class Movie extends Component {
  state = {
    movies: getMovies()
  };

  deleteHandler = movieId => {
    const movies = this.state.movies.filter(movie => movie._id !== movieId);
    this.setState({ movies });
  };

  handleLinke = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  render() {
    const { length: counter } = this.state.movies;
    if (counter === 0)
      return <p className="p-3">There is no mives in database</p>;

    return (
      <div>
        <div className="p-3 bg-secondary text-white">
          Total{" "}
          <span className="badge badge-pill badge-warning">{counter}</span>{" "}
          movie available in the database.
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>No.</th>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie, index) => (
              <tr key={movie._id}>
                <td>{index + 1}</td>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <Like
                    onClick={() => this.handleLinke(movie)}
                    liked={movie.liked}
                  />
                </td>
                <td>
                  <button
                    onClick={() => this.deleteHandler(movie._id)}
                    className="btn btn-outline-danger btn-sm"
                  >
                    <i className="fa fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Movie;
