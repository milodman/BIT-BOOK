import React, { Fragment } from 'react';
import VideoView from "./VideoView";
import TextView from "./TextView";
import ImageView from "./ImageView";
import PostModal from '../newpost/PostModal'
import "./PostList.css";
import Button from './Button'

import { postService } from "./../../service/postService";
import { url, textUrlGet } from "./../../shares/constans";
import PostItem from "./PostItem";

class PostList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            btn: "",
            posts: []
        }
    }


    handleState = (event) => {
        this.setState({
            btn: event.target.id
        })
    }



    componentDidMount() {
        this.fetchPosts()
    }

    fetchPosts = () => {
        postService.getPosts(`${url}${textUrlGet}`)
            .then(postList => {
                this.setState({
                    posts: postList
                })
            })
    }


    getPostsAgain = () => {
        postService.getPosts(`${url}${textUrlGet}`)
            .then(postList => {
                this.setState({
                    posts: postList
                })
            })
    }

    // getDataFromButton = (dataFromButton)=>{
    //     this.setState({btnType:dataFromButton})
    // }



    render() {
        const posts = this.state.posts;
        return (
            <Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-10 offset-1">
                            <div className="menu pmd-floating-action" role="navigation">

                                <a onClick={this.handleState} id="post" data-toggle="modal" data-target="#exampleModal" className="btn3 btn-info btn-all pmd-floating-action-btn btn btn-sm pmd-btn-fab pmd-btn-raised pmd-ripple-effect btn-default" data-title="Post">


                                </a>
                                <a onClick={this.handleState} id="image" data-toggle="modal" data-target="#exampleModal" className="btn2 btn-success btn-all pmd-floating-action-btn btn btn-sm pmd-btn-fab pmd-btn-raised pmd-ripple-effect btn-default" data-title="Image">

                                </a>
                                <a onClick={this.handleState} id="video" data-toggle="modal" data-target="#exampleModal" className=" btn1 btn-danger btn-all pmd-floating-action-btn btn btn-sm pmd-btn-fab pmd-btn-raised pmd-ripple-effect btn-default" data-title="Video">

                                </a>
                                <a className="pmd-floating-action-btn btn pmd-btn-fab pmd-btn-raised pmd-ripple-effect btn-primary" data-title="Add Post" href="javascript:void(0);">
                                    <span className="pmd-floating-hidden">Primary</span>
                                    <i className="material-icons pmd-sm">add</i>
                                </a>
                            </div>

                            {/* <Button callBackFromParent={this.getDataFromButton}/> */}

                            <PostModal data={this.state.btn} getPosts={this.getPostsAgain} />

                            {posts.map(post => {
                                return <PostItem onPostDelete={this.fetchPosts} post={post} key={post.id} />
                            })}

                        </div >
                    </div >
                </div >
            </Fragment >

        )
    }
}
export default PostList;



