import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Components/Card";
import Navbar from "./Components/Navbar";

const NewsLoader = ({type}) => {
  const [data, setData] = useState([]);

  const getNews = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?apiKey=627fbef341e44da7b14e38dead8739dd&q="+type
      )
      .then((response) => {
        setData(response.data.articles);
      });
  };
  useEffect(() => {
    getNews();
  }, [type]);
  return (
    <div>
        <Navbar />
      <h1 style={{ textAlign: "center", margin: "2%" }}>Latest { type } News </h1>
        <div className="container">
          <div className="row">
            
          {data.map((value) => {
          return (
            <div className="col-lg-3"> 
            <Card
              urlToImage={value.urlToImage}
              title={value.title}
              description={value.description}
              url={value.url}
            />
            </div>
          );
        })}
          </div>
        </div>
      
    </div>
  );
};

export default NewsLoader;

