
import NewsItem from './NewsItem'
import React, { useEffect,useState } from 'react'
import Axios from 'axios';

const NewsList = () => {
    const [articles, setArticles] = useState([]);

useEffect(() => {
    const getArticles = async () => {
        const res = await Axios.get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=244968a7881f456abd2b03b5f8254af8"
        );

        setArticles(res.data.articles);
        console.log(res);
    };

    getArticles();
}, []);

    return (<div>
        {articles.map(({title, description, url, urlToImage, author}) => (
            <NewsItem 
            title={title} 
            author={author}
            description={description} 
            url={url}
            urlToImage={urlToImage}
            />
        ))}
    </div> 
    );   
};

export default NewsList;