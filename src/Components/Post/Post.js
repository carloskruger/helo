import React, {Component} from 'react';


class Post extends Component {

    constructor(){
        super();
        this.state =
        {
            title: '',
            img: '',
            content: '',
            username: '',
            profile_pic: '',
        }
    }

render(){
    return(
        <div className="postBox">
        <div className="titleBox" >  {this.props.title}</div>
      
            <div>by {this.props.username}</div>
         <div>  <img src={this.props.profile_pic} width="50px"/></div> 

        </div>
    )
}


}

export default Post;