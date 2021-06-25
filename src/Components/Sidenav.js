import React, {Component} from 'react'
import { Link } from 'react-router-dom'

export default class Sidenav extends Component {

    render() {

        return(
            <ul className="Side-nav">
                <Link to="/MyPosts"><li><button>My Post</button></li></Link>
                <Link to="/posts"><li><button>All Posts</button></li></Link>
                <Link to="/NewPost"><li><button>Create Post</button></li></Link>
            </ul>
        )
    }

}