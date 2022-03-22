import {useState} from 'react';
import React from 'react';
import {connect} from 'react-redux';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Form , Button } from 'react-bootstrap';
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
        <h1>News</h1>
        <SearchNews />

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

export default connect (mapStateToProps, {fetchNews}) (News);