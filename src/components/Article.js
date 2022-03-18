import React from 'react';
import { connect } from 'react-redux';
import { addFavoriteNews } from '../actions/actions';

const mapStateToProps = (state) => ({
    news: state.newsReducers.siteData,
    isLoading: state.isLoading,
    error: state.error
})

const Article = (props) => {
    console.log(props)
    const handleFavorite = (e) => {
        //pass the id we set on each button of each photo
        //the id value is the dog we import at the top
        props.addFavoriteNews(e.target.id);
    }

  return (
    <div>
        <h1>Article</h1>
        <div>
            <img src={props.news.image} alt={"Article"} />
        </div>
        <div>
            <button id={props.news.id} onClick={handleFavorite}>
            Favorite 
            </button>
        </div>
    </div>
  );
};

export default connect (mapStateToProps, {addFavoriteNews}) (Article);