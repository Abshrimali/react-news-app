import React, { useEffect, useState } from "react";
import Wrapper from "../components/layout/Wrapper";
import axios from "axios";

const NewsPage = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`,
      )
      .then((response) => {
        console.log(response.data);
        setNews(response.data.articles);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <Wrapper>
      <h1>News</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {news.map((article) => (
          <div className="card bg-base-100 shadow-xl" key={article.url}>
            <img src={article.urlToImage} alt={article.title} />

            <div className="card-body">
              <h2 className="card-title">{article.title}</h2>
              <p>{article.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default NewsPage;
