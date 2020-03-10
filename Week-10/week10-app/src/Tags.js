import React from "react";


const Tags = ({ tags }) => (
    <span className="pull-right">
        { tags.map(tag => (
            <span key={ tag } className="label label-primary" class="text-muted">{ tag  }</span>
        )) }
    </span>
);

export default Tags;



