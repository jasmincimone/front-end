import React from 'react';
import {connect} from 'react-redux'
import { useEffect } from 'react';
import { fetchNews } from '../actions/actions';
import Article from './Article';

const mapStateToProps = (state) => ({
    news: state.newsReducers.siteData,
    isLoading: state.isLoading,
    error: state.error
})


const News = (props) => {
    useEffect(() => {props.fetchNews()},
    []) 
    console.log(props)
    function handleClick(e){
        e.preventDefault()
        props.fetchNews()
    }
    
  return (
    <div>
        <h1>News</h1>
        <div>
        <button onClick={handleClick}> Get Market News! </button>
        </div>

        {/* Container that holds all news articles */}
        <div>
            {props.isLoading ? "LOADING NEWS..." : ""}
            {props.error ? props.error : ""}
            {props.news ? props.news.map(article => {
                return(
                    <Article news = {article} favorite={false} key={article.id} />
                )
            })
            : "NO NEWS HERE =("}
        </div>
    </div>
  )
}

export default connect (mapStateToProps, {fetchNews})(News)