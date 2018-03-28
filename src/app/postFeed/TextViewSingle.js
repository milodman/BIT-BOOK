import React, { Fragment } from 'react';
import './image.css'
import { url, textUrlGet, textUrlSingle, commentUrl,usersUrl } from "./../../shares/constans"
import { postService } from "./../../service/postService";
import Comment from "./Comment";


class TextViewSingle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
            comments: [],
            user:[]
        }
    }
    componentDidMount() {
        postService.getSingleTextPosts(`${url}${textUrlSingle}${this.props.match.params.id}`)
            .then(text => {
                this.setState({
                    text: text
                })
                return text;
            })

            postService.getComments(`${url}${commentUrl}${this.props.match.params.id}`)
            .then(comments => {
                console.log(comments);
                this.setState({
                    comments: comments
                })
            })
            postService.getUsers(`${url}${usersUrl}${this.props.match.params.id}`)
            .then(user => {
                console.log(user);
                this.setState({
                   user: user
                })
            })
    }

    render() {
        return (
            <Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-8 offset-2">
                        <div className="card text">
                        <div className="card-body">
                            <p className="card-text">{this.state.text.text}</p>
                            <div className="card-body">
                                <p className="card-text videoPost">{this.state.text.type} Post</p>
                                <p className="card-text comment">{this.state.text.commentsNum} Comments</p>
                            </div>
                         </div>
                         </div>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Add your comment .." aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                <div className="input-group-append">
                                    <button className="btn btn-outline-secondary" type="button">SEND</button>
                                </div>
                            </div>

                            {this.state.comments.map(comment => {
                                return (
                                     <div>
                                    <Comment  data={comment} user={this.state.user} />
                                    <br />
                                    </div>
                                )
                                                                
                            })}

                            <br />
                        </div>
                    </div>
                </div>
            </Fragment>
        )

    }
}
export default TextViewSingle;
