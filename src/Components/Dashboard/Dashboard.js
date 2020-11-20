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
            posts : [],
            search_string: '',
            
        }
    }

    componentDidMount(){
        const id   = this.props.user.userId
           console.log("id: ", this.props.user.userId)
      
           axios.get(`/api/getposts/${id}?myPosts=${this.state.myPosts}`).then(res => {
               console.log("res.data: ", res.data)
               console.log("res: ", res)
         this.setState({posts: res.data})
        }).catch(err => console.log(err))
    }
  
    onChangeMyPosts = () => {
        this.setState(initialState => ({
          myPosts: !this.state.myPosts,
        }));

      }

      onChangeSearchString = (e) => {
        this.setState(initialState => ({
          search_string: e.target.value,
        }));

      }


    getPosts = async (e) => {
        console.log("getPosts gets triggered")
        e.preventDefault();
        const {myPosts, search_string} = this.state
        const id = this.props.user.userId
        let parameters = `/${id}`
        if (myPosts === true) {
            parameters = parameters + `?myPosts=true`
        }

        console.log("parameters", parameters)
        
        try {
            const posts = await axios.get(`/api/getposts${parameters}`)
            console.log("posts", posts)

            this.setState({posts: posts.data})
    
        } 
        catch(err){ 
                console.log(err => console.log(err))
        }
    }

    
    
    

    render(){
     
        return(
            <div>
                <div>
            
                <input  placeholder="Search by Title" name="search_string" value={this.state.search_string} onChange={this.onChangeSearchString}/>
                <button onClick={e => this.getPosts(e)}>search</button><button>reset</button>
                <span>My Posts</span>
                <input type="checkbox" id="myPosts" name="myPosts" defaultChecked={this.state.myPosts} onChange={this.onChangeMyPosts}></input>
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
