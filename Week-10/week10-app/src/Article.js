import React, { Component } from "react";
import api from "./api";
import Comments from './Comments';
import CreateComment from './CreateComment';

import Tags from './Tags';


class Article extends Component{
    constructor(props) {
        super(props);

        this.state = { 
            loaded: false,
            article: {},
        }; 
    }

    componentDidMount() {
        api.get(`articles/${this.props.id}`).then(({ data }) => {
        
            this.setState({
            loaded: true,
            article: data.data, 
            });
    });
}
    render() {
        let { article, loaded } = this.state;

        return !loaded ? <p>Loading...</p> : (
         <>
        <h1 class="display-1">{article.title}</h1> 
        <p>{article.article}</p> 
       
        <Tags tags={ article.tags } />
        <Comments id={ this.props.id }/>
        <CreateComment id={this.props.id}/>
        
         </>
        );
    }
}

export default Article;
