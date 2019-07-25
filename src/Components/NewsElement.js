import React, { Component } from 'react';

import './../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './../CSS/NewsFeed.css'



function NewsElement(props) {
    return (
        <div className="newsElement container">
            <div className="newsCard card">

                <div className="card-body">
                <h5 className="card-title">{props.value.title}</h5>

                    <footer class="blockquote-footer">Source: <cite title="Source Title">{props.value.source.name}</cite></footer>
                    
                    {/* <h6 class="card-subtitle mb-2 text-muted">{props.value.source.name}</h6> */}
                    <img className="card-img-top" src={props.value.urlToImage} alt="Image not Availabe" />
                    <p className="card-text">{props.value.description}</p>
                    <a href={props.value.url} className="btn btn-primary">Read More</a>
                </div>
            </div>
        </div>
    );


}

export default NewsElement;