import React, { Fragment } from 'react';
import './text.css';
import { Link } from 'react-router-dom';
const TextView = (props) => {
    console.log(props);


    return (
        <Link to={`/textview/${props.data.id}`}>
            <div className="card text">
                <div className="card-body">
                    <p className="card-text textFeed">{props.data.text}</p>
                    <div className="card-body">
                        <p className="card-text videoPost textBoot">{props.data.type} Post</p>
                        <p className="card-text comment textBoot"> {parseInt(props.data.commentsNum) ? `${props.data.commentsNum} Comments` : `No Comments`}</p>
                    </div>
                </div>
            </div>
        </Link>
    )

}
export default TextView;