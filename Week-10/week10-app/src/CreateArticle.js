import React, { Component } from "react";
import api from "./api";

class CreateArticle extends Component {
    constructor(props){
        super(props);

        this.state={
            title: "",
            article: "",
            tags: ""
        }
        // Binding
        this.handleTitle = this.handleTitle.bind(this);
        this.handleArticle = this.handleArticle.bind(this);
        this.handleTags = this.handleTags.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleTitle(e){
        this.setState({ title: e.currentTarget.value });
    }

    handleArticle(e){
        this.setState({ article: e.currentTarget.value });
    }

    handleTags(e){
        this.setState({ tags: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        let { title, article, tags } = this.state;

        api.post("/articles", { 
            title,
            article, 
            tags: tags.split(", ")

        }).then(() => {
            this.setState({ title: "", article: "", tags: "" }); 
        });
    }

    render() {
        let { title, article, tags } = this.state

        return(
            <>
                <h2>Create Article</h2>
                <form onSubmit={ this.handleSubmit }>
                    <label>Title</label>
                    <input onChange={ this.handleTitle } value={ title }/>

                    <label>Article</label>
                    <input onChange={ this.handleArticle }value={ article } />

                    <label>Tags</label>
                    <input onChange={ this.handleTags }value={ tags } />
                    
                    <button>Submit</button>
                </form>
            </>
        )
    }
}

export default CreateArticle;
