import React from "react";
import ArticleCard from "../ArticleCard/ArticleCards";

const BlogList = ({ articles = [] }) => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <ArticleCard key={index} {...article} />
        ))}
      </div>
    );
  };
  
export default BlogList;
