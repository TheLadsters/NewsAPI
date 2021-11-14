import React from 'react'
import "./newsItem.css";

const NewsItem = ({title, author, description, url, urlToImage}) => {
    return (
        <div className='news-item'>
            <img className='news-img' src={urlToImage} alt="New Image" />
            <h3>
                <a href={url}>{title}</a>
                <p>Posted by: {author}</p>
            </h3>
            <p>{description}</p>
        </div>
    )

}

export default NewsItem