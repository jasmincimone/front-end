import React from 'react';
import { connect } from 'react-redux';
import { addFavoriteNews } from '../actions/actions';

const Article = (props) => {
    const handleFavorite = (e) => {
        //pass the id we set on each button of each photo
        //the id value is the dog we import at the top
        props.addFavoriteNews(e.target.value);
    }

  return (
    <div style={styles.container}>
        <div style={styles.articleContainer}>
            <h2>{props.news.category}</h2>
            <h3>{props.news.headline}</h3>
            <img src={props.news.image} style={styles.img} alt={"Article"} />
            {props.news.source}
            {props.news.summary}
            {props.news.url}
        </div>
        <div style={styles.btn}>
            <button value={props.news.id}  onClick={handleFavorite}>
            Favorite 
            </button>
        </div>
    </div>
  );
};

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        margin: "10px",
    },
    articleContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center",
    },
    img: {
        justifyContent: "center",
        width: "400px",
        height: "300px",
    },
    btn: {
        textAlign: "center",
        paddingTop: '5px'
    }
};

export default connect (null, {addFavoriteNews}) (Article);