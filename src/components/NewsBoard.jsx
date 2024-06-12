import React, {useState, useEffect} from "react";
import NewsItem from "./NewsItem";


const NewsBoard = ({category}) =>{

    const [article,setArticle] = useState([]);

    useEffect( () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        fetch(url).then(response => response.json()).then(data => setArticle(data.articles));
    },[category])
    return(
        <div>
         <h2 className="text-center text-light">Latest <span className="text-center text-danger">News</span></h2>
         {article.map( (news,index)=>{
            return (<NewsItem key={index} title = {news.title} description = {news.description} src = {news.urlToImage} url = {news.url}/>);

         })}
        </div>
    );
}

export default NewsBoard;