import React, {Component} from 'react';
import {connect } from 'react-redux';
import axios from 'axios';

class Post extends Component {

    constructor(){
        super();
        this.state =
        {
            postid: null,
          
            post: {id: null, title: null, img: null, content: null, author: null, author_id: null}
        }
    }

    componentDidMount(){

  const  { postid } = this.props.match.params;

         this.setState({ postid: postid})
           axios.get(`/api/post/${postid}`).then(res => {
               console.log("res.data: ", res.data[0])
               console.log("res: ", res)
         this.setState({post: res.data[0]})
        }).catch(err => console.log(err))
    }

    deletePost = async (e) => {
        e.preventDefault();
        const {postid} = this.state.postid;
        console.log("this.state.postid",this.state.postid)
        console.log("deletePost");
        console.log("postid", postid)
        console.log(postid);
        const post_id = +postid;
        try {
         await axios.delete(`/api/post/${this.state.postid}`)
       
            this.props.history.push('/dashboard')
        } 
        catch(err){ 
                console.log(err => console.log(err))
        }
    }

  

render(){
    console.log("this.props called from post", this.props)
    const {post } = this.state;
    console.log("post", post)
    const {userId } = this.props.user
    let display;
    console.log("author",post.author_id)
    if (+userId === +post.author_id) 
    

        {
            
          display =      <div>
                    <header>{post.title}</header>
                    <div><img src={post.img} alt={post.author} width="40%"></img> </div>
            <div>{post.content}</div>
            <button onClick={e => this.deletePost(e)}>Delete</button>
                </div>
        } else {
        
         display =   <div>
            <header>{post.title}</header>
            <div><img src={post.img} alt={post.author} width="40%"></img> </div>
        <div>{post.content}</div>
        
        </div>
        
        }
        
    return(
     <div>
    {display}
    </div>
    )

}
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(Post);
