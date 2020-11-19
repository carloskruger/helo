import React, {Component} from 'react';
import { connect } from 'react-redux';
import axios from 'axios';


class Form extends Component {

    constructor(){
        super();
        this.state = {
            title: '',
            img: '',
            content: '',
        }
        this.changeHandler = this.changeHandler.bind(this)
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addPost = async (e) => {
        e.preventDefault();
        const {title, img, content} = this.state
        const id = this.props.user.userId
        const author_id = +id;
        try {
            const post = await axios.post('/api/addpost', {title, img, content, author_id})
       
            this.props.history.push('/dashboard')
        } 
        catch(err){ 
                console.log(err => console.log(err))
        }
    }

    

render(){
    { console.log("This is from Form user.userId", this.props.user.userId)}

    return(
        <div className="formarea">
            <h1>New Post</h1>
            <div>
                <span>Title:</span>
          
                <input name="title"
                    type="text"
                    value = {this.state.title }
                    placeholder="title"
                    onChange={ e => this.changeHandler(e)}
                />
            </div>
            <div>  
                <img src={this.state.img} alt="myImage"/>
            </div>
            <div>   
                <span>Image URL</span>
                <input name="img"
                type="text"
                value= {this.state.img}
                placeholder="image URL"
                onChange={ e => this.changeHandler(e)}

                />
            </div>
            <div>   
                <span> Content</span>
                <input 
                name="content"
                type="text"
                value={this.state.content}
                placeholder="content"
                onChange={ e => this.changeHandler(e)}
                /> 
            </div>
            <div>  
            <button onClick={e => this.addPost(e)}>Post</button>
            </div>
        </div>
    )
}



}

const mapStateToProps = state => state

export default connect(mapStateToProps)(Form);

