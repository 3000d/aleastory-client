import { Component } from 'react';
import ReactMixin from 'react-mixin';

import Stories from 'App/collections/Stories';

@ReactMixin.decorate(ReactMeteorData)
export default class Main extends Component {
  getMeteorData() {
    Meteor.subscribe('stories');

    const stories = Stories.find().fetch();

    return {
      stories
    };
  }

  render() {
    console.log(this.data.stories);
    return (
      <div className="container">
      </div>
    )
  }
}