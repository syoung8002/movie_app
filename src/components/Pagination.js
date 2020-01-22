import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Pagination.css";

class Pagination extends Component {
    render () {
        const { getMovies, page_number, param, movie_count } = this.props;
        const pageCount = Math.ceil(movie_count/20);
        return (
            <div className="paging">
                <table>
                    <tbody>
                    <tr>
                        <td className="btn_p" onClick={getMovies.bind(this, 1, param)}>처음</td>
                        <td className="arrow" onClick={getMovies.bind(this, page_number-1, param)}>
                            〈
                        </td>
                        {page_number-1 < 1 ? null : 
                        <td className="btn_num" onClick={getMovies.bind(this, page_number-1, param)}>
                            {page_number-1}
                        </td>}
                        <td className="btn_num on" onClick={getMovies.bind(this, page_number, param)}>
                            {page_number}
                        </td>
                        {page_number+1 > pageCount ? null : 
                        <td className="btn_num" onClick={getMovies.bind(this, page_number+1, param)}>       
                            {page_number+1}
                        </td>}
                        <td className="arrow" onClick={getMovies.bind(this, page_number+1, param)}>
                            〉
                        </td>
                        <td className="btn_p" onClick={getMovies.bind(this, pageCount, param)}>끝</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

Pagination.propTypes = {
    page_number: PropTypes.number.isRequired,
    movie_count: PropTypes.number.isRequired
}

export default Pagination;