import React, {Component} from 'react';
import Post from '../Post/Post';
import axios from 'axios'

class Dashboard extends Component {
    constructor(){
        super();
        this.state = {
            myPosts: true,
            // posts : []
            posts:

            [
                { title: 'Post 1',profile_pic: 'https://robohash.org/edo',content: 'This is content for post 1', username: "edo" }, 
                { title: 'Post 2',profile_pic:'https://robohash.org/tere',content:'This is content for post 2', username: "tere"},
                { title: 'Post 3',profile_pic: 'https://robohash.org/tere',content: 'This is content for post 3', username: "tere"}
            ]
        }
    }

    componentDidMount(){
        // const {id  } = this.props.id
        // this probaby needs to be in the reducer and I have to import it
        const id = 7;
           axios.get(`/api/getposts/${id}`).then(res => {
               console.log("res.data: ", res.data)
               console.log("res: ", res)
        //  this.setState({posts: res.data})
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
    
                        <Post title= {post.title} img= {post.img} profile_pic={ post.profile_pic}  content={post.content} username={post.username}  />
                     )
                     )
                }
            </div>
        )
    }
}

export default Dashboard;