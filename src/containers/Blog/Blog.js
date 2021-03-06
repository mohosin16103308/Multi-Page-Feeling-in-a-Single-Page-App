import React, { Component } from 'react';
// import axios from 'axios';
import axios from '../../axios';
import { BrowserRouter as Router, Switch,Route, Link,NavLink } from "react-router-dom";
import Post from '../../components/Post/Post';
import FullPost from './FullPost/FullPost';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    
    render () {
       

        return (

            <div>
             <header>
                 <nav>
                     <ul>
                         <li>
                         <NavLink to="/"
                         activeClassName="my-classs"
                         activeStyle={{
                             color:'red',
                         }}
                         >Home</NavLink>
                         <br></br>
                         {/* <Link to="/new-post">NewPost</Link> */}
                         <NavLink to = {{
                             pathname:"/new-post",
                             hash:'#submit',
                             search:'?quick-submit=true',
                         
                         }}
                         >New Post
                         </NavLink>
                        
                         </li>
                     </ul>
                 </nav>
             </header>

                    <Switch>
                                <Route path="/" exact component={Posts} />
                                <Route path="/fullpost/:id" exact component={FullPost} />
                                <Route path="/new-post"  exact component={NewPost} />
                    </Switch>
             
               
            </div>
        );
    }
}

export default Blog;