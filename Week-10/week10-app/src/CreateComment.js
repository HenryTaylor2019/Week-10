import React, { Component } from "react";
import api from "./api";

class CreateArticle extends Component {
    constructor(props){
        super(props);

        this.state={
            email: "",
            comment: ""
        }

        this.handleEmail = this.handleEmail.bind(this);
        this.handleComment = this.handleComment.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleEmail(e){
        this.setState({ email: e.currentTarget.value });
    }

    handleComment(e){
        this.setState({ comment: e.currentTarget.value });
    }

    handleSubmit(e){
        e.preventDefault();
        let { email, comment} = this.state;

        api.post(`/articles/${this.props.id}/comments`, { 
            email,
            comment

        }).then(() => {
            this.setState({ email: "", comment: ""}); 
        });
    }

    render() {
        let { email, comment } = this.state;

        return(
            <>
            
                <form onSubmit={ this.handleSubmit}>
                    <h2>Leave Comment</h2>

                    <label>Email:</label>
                    <input onChange={ this.handleEmail } value={ email } />

                    <label>Comment:</label>
                    <input onChange={ this.handleComment } value={ comment } />

                    <button>Post Comment</button>
                </form>

            </>
        );
    }
}

export default CreateArticle;
