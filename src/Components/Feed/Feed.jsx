import React from 'react';
import './Feed.scss';
import Sidebar from '../Sidebar/Sidebar';
import FilterBar from '../Filterbar/Filterbar';

function Feed({ title, content, imageUrl }) {
  return (
    <>  
      <Sidebar />
      <div className='Feed'>
        <div className="heading-1">
          <h1>News Feed Table</h1>
            <div className="head-buttons">
                <button>Edit</button>
                <button>Delete</button>
                <button>View</button>
            </div>      
        </div>
        <hr />
        <div className="feed-container">
          <div className="feed-left">
            <div className="card-container">
              <div className="card">
                <img src={imageUrl} alt="Card Image" className="card-image" />
                <div className="card-content">
                  <h3 className="card-title">{title}</h3>
                  <p className="card-text">{content}</p>
                </div>
              </div>
              <div className="card">
                <img src={imageUrl} alt="Card Image" className="card-image" />
                <div className="card-content">
                  <h3 className="card-title">{title}</h3>
                  <p className="card-text">{content}</p>
                </div>
              </div>
              <div className="card">
                <img src={imageUrl} alt="Card Image" className="card-image" />
                <div className="card-content">
                  <h3 className="card-title">{title}</h3>
                  <p className="card-text">{content}</p>
                </div>
              </div>
            </div>
            <div className="card-container">
              <div className="card">
                <img src={imageUrl} alt="Card Image" className="card-image" />
                <div className="card-content">
                  <h3 className="card-title">{title}</h3>
                  <p className="card-text">{content}</p>
                </div>
              </div>
              <div className="card">
                <img src={imageUrl} alt="Card Image" className="card-image" />
                <div className="card-content">
                  <h3 className="card-title">{title}</h3>
                  <p className="card-text">{content}</p>
                </div>
              </div>
              <div className="card">
                <img src={imageUrl} alt="Card Image" className="card-image" />
                <div className="card-content">
                  <h3 className="card-title">{title}</h3>
                  <p className="card-text">{content}</p>
                </div>
              </div>
            </div>
            <div className="card-container">
              <div className="card">
                <img src={imageUrl} alt="Card Image" className="card-image" />
                <div className="card-content">
                  <h3 className="card-title">{title}</h3>
                  <p className="card-text">{content}</p>
                </div>
              </div>
              <div className="card">
                <img src={imageUrl} alt="Card Image" className="card-image" />
                <div className="card-content">
                  <h3 className="card-title">{title}</h3>
                  <p className="card-text">{content}</p>
                </div>
              </div>
              <div className="card">
                <img src={imageUrl} alt="Card Image" className="card-image" />
                <div className="card-content">
                  <h3 className="card-title">{title}</h3>
                  <p className="card-text">{content}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="feed-right">
           <FilterBar />
          </div>
        </div>
      </div>
    </>
  );
}

export default Feed;
