
 import React,{Component} from 'react';
 import axios from '../../../axios';
 import { BrowserRouter as Router, Route, Link,NavLink } from "react-router-dom";

import Post from '../../../components/Post/Post';
class  Posts extends Component {
    state = {
        posts: [],
        selectedPostId: null,
        error: false
    }

    componentDidMount () {
        axios.get( '/posts' )
            .then( response => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Max'
                    }
                });
                this.setState({posts: updatedPosts});
                // console.log( response );
            } )
            .catch(error => {
                // console.log(error);
                this.setState({error: true});
            });
    }

    postSelectedHandler = (id) => {

       this.props.history.push('/fullpost/'+id);
    }

    render() { 
       
        let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return (
                // <Link 
                //     to = {'/fullpost/'+post.id}
                //     key={post.id} 
                // >
                    <Post 
                   
                    title={post.title} 
                    author={post.author}
                clicked={() => this.postSelectedHandler(post.id)} />
                // </Link>
                )
                ;
            });
        return ( 
        <section className="Posts">
            {posts}
        </section>
         );
    }
}
}
export default Posts;