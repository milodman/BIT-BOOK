import React, { Component, Fragment } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import PostPage from "./postFeed/PostPage";
import Header from './partials/Header'
import Footer from './partials/Footer'
import ImageView from "./postFeed/ImageView";
import ImageViewSingle from "./postFeed/ImageViewSingle";
import VideoView from "./postFeed/VideoView";
import VideoViewSingle from "./postFeed/VideoViewSingle";
import TextView from "./postFeed/TextView";
import TextViewSingle from "./postFeed/TextViewSingle";

import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Switch >
          <Route exact path="/" component={PostPage} />
          <Route exact path="/imageview" component={ImageView} />
          <Route path="/imageview/:id" component={ImageViewSingle} />
          {/* <Route path="/imageview/comments/:id" component={ImageViewSingle}/> */}
          <Route exact path="/videoview" component={VideoView} />
          <Route path="/videoview/:id" component={VideoViewSingle} />
          <Route exact path="/textview" component={TextView} />
          <Route path="/textview/:id" component={TextViewSingle} />
        </Switch >
        <Footer />
      </Fragment>
    );
  }
}

export default App;
