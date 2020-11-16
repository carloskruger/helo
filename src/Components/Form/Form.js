import React, {Component} from 'react';


class Form extends Component {

    constructor(){
        super();
        this.state = {

        }
        this.changeHandler = this.changeHandler.bind(this)
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    

render(){
const {} = this.
    return(
        <div className="formarea">
            <h1>New Post</h1>
            <div>
                <span>Title:</span>
          
                <input name="title"
                    type="text"
                    value = {title }
                    placeholder="title"
                    onChange={ e => this.changeHandler(e)}
                />
            </div>
            <div>  
                <img src={img} alt="myImage"/>
            </div>
            <div>   
                <span>Image URL</span>
                <input name="img"
                type="text"
                value= {img}
                placeholder="image URL"
                onChange={ e => this.changeHandler(e)}

                />
            </div>
            <div>   
                <span> Content</span>
                <input 
                name="content"
                type="text"
                placeholder="content"
                onChange={ e => this.changeHandler(e)}
                /> 
            </div>
            <div>  
                 <button>Post</button>
            </div>
        </div>
    )
}



}

export default Form;