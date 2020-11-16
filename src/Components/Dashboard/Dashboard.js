import React, {Component} from 'react';
import Post from '../Post/Post';
import axios from 'axios'

class Dashboard extends Component {
    constructor(){
        super();
        this.state = {
            myPosts: true,
            posts : []          
        }
    }

    componentDidMount(){

        // I need to get id from the state
        // const {id  } = this.props.id
        const id = 7;
           axios.get(`/api/getposts/${id}`).then(res => {
         this.setState({posts: res.data})
        })
    }


    render(){
        return(
            <div>
                <div>
            
                <input  placeholder="Search by Title"/><button>search</button><button>reset</button>
                <span>My Posts</span>
                <input type="checkbox" id="myposts" name="myposts" value={this.state.myPosts} checked></input>
                </div>
                {
                    this.state.posts.map((post, index) => (
    
                        <Post title= {post.title}  profile_pic={ post.profile_pic}  content={post.content} username={post.username}  />
                     )
                     )
                }
            </div>
        )
    }
}

export default Dashboard;