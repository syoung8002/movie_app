import React, { Component } from "react";
import axios from "axios";
import Movie from "../components/Movie";
import Pagination from "../components/Pagination";
import "./Home.css";

class Home extends Component {
  state = {
    isLoading: true,
    movies: [],
    pageNum: 1,
    param: "like_count"
  };

  getMovies = async (pageNum, param) => {
    if(pageNum < 1) {
      pageNum = 1;
    }
    const {
      data: {
        data: { movies }
      },
      data: {
        data: { 
          movie_count,
          page_number
        }
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?page=" + pageNum + "&sort_by=" + param);
    this.setState({ 
      movies, 
      isLoading: false, 
      movie_count: movie_count, 
      page_number: page_number,
      param: param
    });
  }

  isActive(value) {
    return (value === this.state.param) ? "active" : "default";
  }

  componentDidMount() {
    this.getMovies(this.state.pageNum, this.state.param);
  }

  render() {
    const { isLoading, movies, movie_count, page_number, param } = this.state;
    return (
      <div className="container">
        {isLoading ? (
            <div className="loader">
              <span className="loader_text">Loading...</span>
            </div> 
        ) : (
          <>
          <div className="sort_by">
            <table>
              <tbody>
                <tr>
                  <th>정렬 기준</th>
                  <td className={this.isActive("like_count")} onClick={this.getMovies.bind(this, 1, "like_count")}>Like</td>
                  <td className={this.isActive("download_count")} onClick={this.getMovies.bind(this, 1, "download_count")}>Download</td>
                  <td className={this.isActive("rating")} onClick={this.getMovies.bind(this, 1, "rating")}>Rating</td>
                  <td className={this.isActive("year")} onClick={this.getMovies.bind(this, 1, "year")}>Year</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="movies">
            {movies.map(movie => (
              <Movie 
                key={movie.id}
                id={movie.id} 
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
          <div className="paging_area">
            <Pagination
              key={page_number}
              page_number={page_number}
              movie_count={movie_count}
              getMovies={this.getMovies}
              param={param}
            />
          </div>
          </>
        )}
      </div>
    );
  }
}

export default Home;
