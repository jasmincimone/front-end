import {useState} from 'react';
import React from 'react';
import {connect} from 'react-redux';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Form , Button } from 'react-bootstrap';
import { fetchForex } from '../actions/actions';

const mapStateToProps = (state) => ({
    news: state.apiReducers.siteData,
    isLoading: state.isLoading,
    error: state.error
})

const Forex = (props) => {
    useEffect(() => {props.fetchForex()},
    []) 
    
  return (
    <div>
        <h1>Forex Symbols</h1>

        {/* Container that holds all news articles */}
        <div>
            {props.isLoading ? "LOADING FX PAIRS..." : ""}
            {props.error ? props.error : ""}
            {props.forex ? props.forex.map(article => {
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