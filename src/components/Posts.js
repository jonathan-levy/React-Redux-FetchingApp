import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect} from 'react-redux';
import {fetchPosts} from '../actions/postAction';

class Posts extends Component { 
 componentWillMount(){
  this.props.fetchPosts();
 }

 componentWillReceiveProps(nextProps){
  if(nextProps.newPost)
    this.props.posts.unshift(nextProps.newPost);  
 }


 // constructor(props){
 //   super(props);
 //   this.state = {
 //     posts: []
 //   }
 // }


//componentWillMount(){
//fetch('https://jsonplaceholder.typicode.com/posts')
//.then(response => response.json())
//.then(json => this.setState({ posts : json}));
//}
 
 
  render() {

    //const postItems = this.state.posts.map(post => (
    const postItems = this.props.posts.map(post => (
      <div key={post.id}>
        <h3>
          {post.title}
        </h3>
        <p>
          {post.body}
        </p>
      </div>
    ));

    return (
      <div>
        <h2>
          Posts
        </h2>
        {postItems}
      </div>
    )
  }
}

//runtime typecheck for react props
Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  Posts : PropTypes.array.isRequired,
  newPost : PropTypes.object
};

const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost : state.posts.item
});

//export default Posts
export default connect(mapStateToProps, {fetchPosts})(Posts);