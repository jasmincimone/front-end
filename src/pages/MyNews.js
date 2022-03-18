import React from 'react';
import { connect } from 'react-redux';
import News from '../components/News';

const mapStateToProps = state => ({
    FavoriteNews: state.favorites
})

function MyNews(props){
    const { FavoriteNews } = props
    console.log(props)

  return (
    <div>
        <h1>MyNews</h1>

        {FavoriteNews ? FavoriteNews.map(news => {
            console.log(news)
            return(
                <News news={news} key={news} favorite={true}/>
            )
        })
            : "NO FAVORITE NEWS =("}
    </div>
  )
}

export default connect(mapStateToProps, {}) (MyNews);