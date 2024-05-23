import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt4__blog section__padding" id="blog">
    <div className="gpt4__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="gpt4__blog-container">
      <div className="gpt4__blog-container_groupA">
        <Article imgUrl={blog01} date="May 15, 2024" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
      </div>
      <div className="gpt4__blog-container_groupB">
        <Article imgUrl={blog02} date="May 15, 2024" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article imgUrl={blog03} date="May 15, 2024" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
              </div>
    </div>
  </div>
);

export default Blog;