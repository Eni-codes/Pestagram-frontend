import React, { Component } from 'react'

export default class RestaurantForm extends Component {
    state ={
        username:"",
        pet:"", 
        comment: "", 
        photo: "",
        caption: "",
        likes: 0,
    }


   sendNewPost =(e)=>{
    e.preventDefault()
  const reqObj = {
      headers: {"Content-Type": "application/json"},
      method:  "POST",
      body: JSON.stringify({...this.state})
  }
  // debugger;
  fetch("http://localhost:3000/posts", reqObj)
  .then(res => res.json())
  .then((newPostObj => this.props.addPost(newPostObj)))
}
    render() {
        return (
            <>
            <div>
              <h4> What's on your mind </h4>
            </div>
          <section className="newform">
            
            <form onSubmit= {this.sendNewPost} addPost= {this.props.addPost} className="form-inline ml-4">

              <input value = {this.state.pet} onChange={(e)=> this.setState({pet:e.target.value})}type="text" className="form-control mb-2 mr-sm-2" placeholder="pet"/>
              <div className="input-group mb-2 mr-sm-2">
                <input value = {this.state.username} onChange={(e)=> this.setState({username:e.target.value})}type="text" className="form-control mb-2 mr-sm-2" placeholder="UserName"/>
                  </div>
                <div className="input-group mb-2 mr-sm-2">
                    <input value = {this.state.photo}onChange={(e)=> this.setState({photo: e.target.value})} type="text" className="form-control" placeholder="photo URL"/>
                </div>

                <div className="input-group mb-2 mr-sm-2">
                    <input value = {this.state.likes}onChange={(e)=> this.setState({likes: e.target.value})}type="number" className="form-control" placeholder="likes "/>
                </div>
                <div className="input-group mb-2 mr-sm-2">
                    <input value = {this.state.comment}onChange={(e)=> this.setState({comment: e.target.value})} comment="text" className="form-control" placeholder="comment"/>
                </div>


                <div className="input-group mb-2 mr-sm-2">
                    <input value = {this.state.caption} onChange={(e)=> this.setState({caption: e.target.value})} type="text-area" className="form-control" placeholder="captions"/>
                </div>

                

                <button type="submit" className="btn btn-primary mb-2">Submit</button>
            </form>
            </section>
            </>
        )
    }
}
