import React from 'react'

const NewsItem = (props) => {

  let { title, description, imgurl, newsurl, author, time, source } = props;


  return (
    <div>
      <div className="card my-2" style={{ width: "22rem" }}>
        <img src={!imgurl ? "https://bobbyhadz.com/images/blog/javascript-unexpected-reserved-word-await/banner.webp" : imgurl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            position: 'absolute',
            right: 0,
            top: 0
          }}>
            <span className="badge rounded-pill bg-danger">{source.name}</span>
          </div>
          <p className="card-text">{description}....</p>

          <p className="card-text"><small className="text-muted">Updated by {author ? author : "Unknown"} on {Date({ time }).slice(3, 16)}</small></p>
          <a className="btn btn-dark" href={newsurl} target="_blank" rel="noreferrer" >Read More</a>
        </div>
      </div>
    </div>
  )
}


export default NewsItem
