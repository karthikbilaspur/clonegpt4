import React from 'react';
import './article.css';

const Article = ({ imgUrl, date, text }) => (
  <div className="gp4t__blog-container_article">
    <div className="gpt4__blog-container_article-image">
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="gpt4__blog-container_article-content">
      <div>
        <p>{date}</p>
        <h1>{text}</h1>
      </div>
      <p> Full Article..... Load More</p>
    </div>
  </div>
);

export default Article;