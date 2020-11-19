import React, {Component} from 'react';
import Post from '../Post/Post';
import {connect } from 'react-redux';
import axios from 'axios';
import {Link} from 'react-router-dom';


class Dashboard extends Component {
    constructor(){
        super();
        this.state = {
            myPosts: true,
            posts : []
            
        }
    }

    componentDidMount(){
        const id   = this.props.user.userId
           console.log("id: ", this.props.user.userId)
      
           axios.get(`/api/getposts/${id}`).then(res => {
               console.log("res.data: ", res.data)
               console.log("res: ", res)
         this.setState({posts: res.data})
        }).catch(err => console.log(err))
    }
  

    render(){
     
        return(
            <div>
                <div>
            
                <input  placeholder="Search by Title"/><button>search</button><button>reset</button>
                <span>My Posts</span>
                <input type="checkbox" id="myposts" name="myposts" value={this.state.myPosts} checked></input>
                </div>
                {/* map function */}
                    {  this.state.posts.map((post, index) => (
        <Link to={`/post/${post.id}`}>
        <div className="postBox" >
            <div className="titleBox" >  {post.title}</div>
            <div>by {post.username}</div>
            <div>  <img src={post.profile_pic} alt="post.username" width="50px"/></div> 
        </div>
        </Link>
                )
                )}
                {/* end of map function */}
            </div>
        )
    }
}


const mapStateToProps = state => state

export default connect(mapStateToProps)(Dashboard);
