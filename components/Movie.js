import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Movie.module.css";

function Movie(props) {
  const [personalNote, setPersonalNote] = useState(0);

  // Average evaluation
  const stars = [];
  for (let i = 0; i < 10; i++) {
    let style = {};
    if (i < props.voteAverage - 1) {
      style = { color: "#f1c40f" };
    }
    stars.push(<FontAwesomeIcon key={i} icon={faStar} style={style} />);
  }

  // Like movie
  const handleLikeMovie = () => {
    props.updateLikedMovies(props.title);
  };
  let heartIconStyle = { color: "rgba(255, 255, 255, 0.6)", cursor: "pointer" };
  if (props.isLiked) {
    heartIconStyle = { color: "#e74c3c", cursor: "pointer" };
  }

  // Personal note
  const personalStars = [];
  for (let i = 0; i < 10; i++) {
    let style = { cursor: "pointer" };
    if (i < personalNote) {
      style = {
        color: "#2196f3",
        cursor: "pointer",
      };
    }
    personalStars.push(
      <FontAwesomeIcon
        key={i}
        icon={faStar}
        onClick={() => setPersonalNote(i + 1)}
        style={style}
        className="note"
      />
    );
  }

  return (
    <div className={styles.card}>
      <div className={styles.containerposter}>
        <img className={styles.image} src={props.poster} alt={props.title} />
        <span className={styles.overlayicon}>
          <FontAwesomeIcon
            icon={faHeart}
            onClick={() => handleLikeMovie()}
            style={{ ...heartIconStyle, fontSize: "20px" }}
            className="like"
          />
        </span>
      </div>
      <div className={styles.textContainer}>
        <div>
          <span className={styles.name}>{props.title}</span>
          <p className={styles.description}>{props.overview}</p>
        </div>
        <div className={styles.iconContainer}>
          <span className={styles.vote}>
            {stars} ({props.voteCount})
          </span>
          <span>
            {personalStars} ({personalNote})
          </span>
        </div>
      </div>
    </div>
  );
}

export default Movie;
