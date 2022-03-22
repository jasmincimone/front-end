import React from 'react';
import {connect} from 'react-redux';
import { useEffect } from 'react';
import { fetchNews } from '../actions/actions';
import Article from './Article';
import SearchNews from './SearchNews';

const mapStateToProps = (state) => ({
    news: state.apiReducers.siteData,
    isLoading: state.isLoading,
    error: state.error
})

const News = (props) => {
    useEffect(() => {props.fetchNews()},
    []) 
    
  return (
    <div>
        <h1>My Profile</h1>
        <SearchNews />

        {/* Container that holds all news articles */}
        <div>
            {props.isLoading ? "LOADING Profile..." : ""}
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

export default connect (mapStateToProps, {fetchNews}) (News);