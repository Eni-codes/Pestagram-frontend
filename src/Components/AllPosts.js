import React, {Component} from 'react'
import {Post} from '../Components/Post'

export default class AllPosts extends Component {

    state = {
        all_posts: []
    }

    componentDidMount(){
        fetch("http://localhost:3000/posts", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.token}`
          }
        })
        .then(res => res.json())
        .then(posts => this.setState({all_posts:posts}))
    
      }

   
    
     postCards = this.state.all_posts.map((post) => <Post key={post.id} posts={this.state.all_post}/>)

    render() {

        return(
           <div>
                {this.postCards}
           </div>
        )
    }
}







// componentDidMount(){
//     fetch("http://localhost:3000/posts")
//     .then(res => res.json())
//     .then(posts => this.setState({all_posts:posts}))
// }