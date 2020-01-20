import React from "react";
import "./Detail.css";

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push("/");
        }
    }

    render() {
        const { location } = this.props;
        if (location.state) {
            return (
                <>
                <div className="movie__detail">
                    <img src={location.state.poster} alt={location.state.title} title={location.state.title} />
                    <div className="movie__info">
                        <h1>{location.state.title}</h1>
                        <h3>{location.state.year}</h3>
                        <ul>
                            {location.state.genres.map((genre, index) => (
                                <li key={index}>
                                    {genre}
                                </li>
                            ))}
                        </ul>
                        <p>{location.state.summary}</p>
                    </div>
                </div>
                </>
            );
        } else {
          return null;
        }
    }
}

export default Detail;