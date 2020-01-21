import React from "react";
import PropTypes from "prop-types";
import "./Pagination.css";

class Pagination extends React.Component {
    render () {
        const { getMovies, page_number, movie_count, param } = this.props;
        return (
            <div className="paging">
                <span className="btn_p arrow" onClick={getMovies.bind(this, page_number-1, param)}>〈</span>
                <span className="btn_num">
                    {page_number}&nbsp;&nbsp;/&nbsp;&nbsp;{Math.ceil(movie_count/20, param)}
                </span>
                <span className="btn_p arrow" onClick={getMovies.bind(this, page_number+1, param)}>〉</span>
            </div>
        );
    }
}

Pagination.propTypes = {
    page_number: PropTypes.number.isRequired,
    movie_count: PropTypes.number.isRequired
}

export default Pagination;