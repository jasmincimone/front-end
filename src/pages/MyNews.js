import React from 'react';
import { connect } from 'react-redux';
import News from '../components/News';

const mapStateToProps = state => ({
    FavoriteNews: state.favorite
})

function MyNews(props){
    const { FavoriteNews } = props

  return (
    <div>
        <h1>MyNews</h1>
        {FavoriteNews ? FavoriteNews.map(article => {
            console.log(article)
            return(
                <News news={article} key={article.id} favorite={true}/>
            )
        })
            : "NO FAVORITE NEWS =("}
    </div>
  )
}

export default connect(mapStateToProps, {}) (MyNews);