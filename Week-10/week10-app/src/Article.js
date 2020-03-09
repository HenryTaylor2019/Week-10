import React, { Component } from "react";
import api from "./api";
import Comments from './Comments';


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
        <h2>{article.title}</h2> 
        <p>{article.article}</p> 
        <p>{ article.tags } </p>
        
        <Comments id={ this.props.id }/>

         </>
        );
    }
}

export default Article;
