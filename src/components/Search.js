import React, { useState } from 'react'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";
import NewsItem from './NewsItem'

const Search = (props) => {

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://gnews.io/api/v4/top-headlines?q=${searchTerm}&token=2bcfa6d5cad67614a04b9626391d5514&page=${page}&pageSize=${props.pageSize}`;

    setLoading(true)
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json()
    props.setProgress(70);
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    props.setProgress(100);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    document.title = `${capitalizeFirstLetter(searchTerm)} - NewsMonkey`;
    updateNews();
  };

  const fetchMoreData = async () => {
    const url = `https://gnews.io/api/v4/top-headlines?q=${searchTerm}&token=2bcfa6d5cad67614a04b9626391d5514&page=${page + 1}&pageSize=${props.pageSize}`;
    setPage(page + 1)
    let data = await fetch(url);
    let parsedData = await data.json()
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
  };

  return (
    <div className="container mt-4">
      <h1 className="container " style={{ "marginTop": "80px", marginLeft: "100px" }}> What do you want to Search ???</h1>
      <form className="container d-flex my-1" onSubmit={handleSubmit}>
        <input type="text" id="text" name="text" className="form-control " style={{ marginLeft: "100px" }} onChange={handleChange} />
        <button className="btn btn-outline-success" style={{ marginLeftt: "500px", marginRight: "300px", color: 'white', background: "red" }} ><strong>Search</strong></button>
      </form>
      <>

        <h2 className='my-4' style={{ marginLeft: "100px" }}>NewsMonkey - Top Headlines</h2>
        {searchTerm.length>0?" ":<h4 style={{marginLeft: "100px"}}>Type in search box and press search button...</h4>}
        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >

          <div className="container">
            <div className="row" >
              {articles.map((element) => {
                return <div className="col-md-4" key={element.url}>
                   <NewsItem title={element.title ? element.title.slice(0, 45) : " "} description={element.description ? element.description.slice(0, 88) : " "} imgurl={element.image} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source} /> 
              </div>
              })}
            </div>
          </div>

        </InfiniteScroll>
      </>
    </div>
  )
}

export default Search
