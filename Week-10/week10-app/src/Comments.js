import React, { Component } from "react";
import api from "./api";

class Comments extends Component{
    constructor(props) {
        super(props);

        this.state = { 
            loaded: false,
            comments: {},
        }; 
    }

    componentDidMount() {
        api.get(`articles/${this.props.id}/comments`).then(({ data }) => {
        
            this.setState({
            loaded: true,
            comments: data.data, 
            });
    });
}
    render() {
        let { comments, loaded } = this.state;

        return !loaded ? <p>Loading ARRRGH...</p> : (
         <>
         <h3>Comments</h3>
            <ul className="list-group">
                { comments.map(comment => (
                    <li className="list-group-item" key={ comment.id }>
                        <h3>{ comment.email }</h3> 
                      
                        <p>{ comment.comment }</p>
                    </li>

                )) }
            </ul>
    
         </>
        );
    }
}

export default Comments;
