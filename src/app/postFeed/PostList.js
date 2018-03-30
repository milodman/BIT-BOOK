import React, { Fragment } from 'react';
import VideoView from "./VideoView";
import TextView from "./TextView";
import ImageView from "./ImageView";
import { postService } from "./../../service/postService";
import { url, textUrlGet } from "./../../shares/constans";
import PostItem from "./PostItem";

class PostList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        postService.getPosts(`${url}${textUrlGet}`)
            .then(postList => {
                this.setState({
                    posts: postList
                })
            })
    }


    render() {
        const posts = this.state.posts;
        return (
            <Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-8 offset-2">

                            {posts.map(post => {
                                return <PostItem post={post} key={post.id} />
                            })}

                        </div >
                    </div >
                </div >
            </Fragment >

        )
    }
}
export default PostList;
