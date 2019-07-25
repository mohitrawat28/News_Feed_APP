import React, { Component } from 'react';
import './../CSS/NavBar.css'

import './../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './../../node_modules/jquery'
import './../../node_modules/popper.js'


class NavBar extends Component {

    //Calls the parent query Handler function for Search Value
    searchHandler = (type) => {
        this.props.queryHandler(document.getElementById('query').value, type);
    }

    //Calls the parent query Handler function for Category menu
    categoryButtonHandler = (e) => {

        let text = e.target.innerText.toLowerCase()
        console.log(text)
        if (text === "home") {
            this.props.queryHandler(text, "home")
        }
        else {
            this.props.queryHandler(text, "category")
        }
    }


    handleKeyPress = (e) => {
        if (e.charCode === 13) {
            e.preventDefault();
            this.searchHandler();
        }
    }



    render() {
        return (
            <nav class="navColor navbar navbar-expand-lg navbar-dark bg-dark fixed-top">

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <a class="navbar-brand">TopNews</a>
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#" onClick={(e) => { this.categoryButtonHandler(e); }}>Home</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="#" onClick={(e) => { this.categoryButtonHandler(e); }}>Business</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" onClick={(e) => { this.categoryButtonHandler(e); }}>Entertainment</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" onClick={(e) => { this.categoryButtonHandler(e); }}>General</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" onClick={(e) => { this.categoryButtonHandler(e); }}>Health</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" onClick={(e) => { this.categoryButtonHandler(e); }}>Science</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" onClick={(e) => { this.categoryButtonHandler(e); }}>Sports</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" onClick={(e) => { this.categoryButtonHandler(e); }}>Technology</a>
                        </li>
                        
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <input class="searchBar" onKeyPress={(e) => this.handleKeyPress(e)}
                            id="query" type="search" placeholder="Search" aria-label="Search" />

                        <button class="btn btn-outline-primary" type="button"
                            onClick={() => {
                                this.searchHandler("search");
                            }}>Search</button>
                    </form>
                </div>

            </nav>
        )
    }
}

export default NavBar;