import React, {Component} from 'react'
import { Link } from 'react-router-dom'

export default class Sidenav extends Component {

    render() {

        return(
            <ul className="Side-nav">
                <Link to="/Home"><li><button>Home</button></li></Link>
                <Link to="/Posts"><li><button>My Post</button></li></Link>
                <Link to="/Friends"><li><button>Friends</button></li></Link>
                <Link to="/Photos"><li><button>My Photos</button></li></Link>
                <Link to="/Posts"><li><button>All Posts</button></li></Link>
                <Link to="/NewPost"><li><button>Create Post</button></li></Link>
            </ul>
        )
    }

}