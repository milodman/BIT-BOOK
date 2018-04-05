import React from "react";
import "./Comment.css";
import { postService } from "./../../service/postService";
import { url, textUrlGet, textUrlSingle, commentUrl, usersUrl } from "./../../shares/constans"
class Comment extends React.Component {
    constructor(props) {

        super(props)
        this.state = {
            user: [],
            profile: []

        }
    }


    componentDidMount() {
        console.log(this.props.data.authorId);
        postService.getUser(`${url}${usersUrl}/${this.props.data.authorId}`)
            .then(users => {
                console.log(users);
                this.setState({
                    user: users
                })
            })

    }

    render() {
        console.log(this.state.user.name);


        return (
            <div className="card comm" >
                <div className="card-body">

                    <img src={this.state.user.avatarUrl} width="100"

                        height="100" className="float-left" alt="..." />

                    <p className="card-text comText">{this.props.data.body}</p>
                </div>
                <h5 className="card-title comN">{this.state.user.name}</h5>
            </div>
        )
    }
}
export default Comment;