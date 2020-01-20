import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import Pagination from "../components/Pagination";
import "./Home.css";

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
    pageNum: 1
  };

  getMovies = async (pageNum) => {
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
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=like_count&page=" + pageNum);
    this.setState({ 
      movies, 
      isLoading: false, 
      movie_count: movie_count, 
      page_number: page_number 
    });
  }

  componentDidMount() {
    this.getMovies(this.state.pageNum);
  }

  render() {
    const { isLoading, movies, movie_count, page_number } = this.state;
    return (
      <section className="container">
        {isLoading ? (
            <div className="loader">
              <span className="loader_text">Loading...</span>
            </div> 
        ) : (
          <>
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
            />
          </div>
          </>
        )}
      </section>
    );
  }
}

export default Home;
