import React, { Component } from 'react'
// import {useHistory} from 'react-router-dom'


export default class NewPost extends Component {
    constructor(){
        super();
        this.state= {pet:"", 
        photo: "",
        caption: "",
       
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit =  this.handleSubmit.bind(this);
   
    }
    
    
    handleChange (event){
       
        this.setState({[event.target.name]: event.target.value});
        console.log(event.target.value)
    }
   
   
   handleSubmit(event) {
       console.log("form submit")
      const {
          pet,
          photo,
          caption
      } = this.state;
     
    fetch('http://localhost:3000/user_posts', {
        method: 'POST',
        body: JSON.stringify({
          user:{
           pet: pet,
           photo: photo,
           caption: caption
          }
        }),
        headers:{'Content-Type':'application/json'}
    }).then(res=>res.json())
    .catch(error=>console.log('Error:',error))
     .then((response => this.props.addPost(response)));
     event.preventDefault()

    //  this.props.history.push("/profile")
    }


    render() {
        return (
            <>
            <div>
              <h4> What's on your mind </h4>
            </div>
          <section className="newform">
            
            <form onSubmit= {this.handleSubmit} className="form-inline ml-4">

              <input type="text" name="pet" className="form-control mb-2 mr-sm-2" placeholder="pet" value={this.state.pet} onChange={this.handleChange}/>
              {/* <div className="input-group mb-2 mr-sm-2">
                <input  onChange={this.handleNameChange}type="text" className="form-control mb-2 mr-sm-2" placeholder="UserName"/>
                  </div> */}
                <div className="input-group mb-2 mr-sm-2">
                    <input   type="text" name="photo" className="form-control" placeholder="photo URL" value={this.state.photo} onChange={this.handleChange} />
                </div>

                {/* <div className="input-group mb-2 mr-sm-2">
                    <input value = {this.state.likes}onChange={(e)=> this.setState({likes: e.target.value})}type="number" className="form-control" placeholder="likes "/>
                </div>
                <div className="input-group mb-2 mr-sm-2">
                    <input value = {this.state.comment}onChange={(e)=> this.setState({comment: e.target.value})} comment="text" className="form-control" placeholder="comment"/>
                </div> */}


                <div className="input-group mb-2 mr-sm-2">
                    <input   type="text-area" name="caption" className="form-control" placeholder="captions" value={this.state.caption}  onChange={this.handleChange}/>
                </div>

                

                <button type="submit" className="btn btn-primary mb-2">Submit</button>
            </form>
            </section>
           
            </>
        )
    }
}
