import React, {Component} from 'react' 

export default class Profile extends Component {

    componentDidMount() {
        fetch("https://localhost:3000/users")
        .then(res => res.json())
        .then(data => console.log(data))
    }

    render() {

        return(
            <div>
                <SideNav />
                <div>
                    <h3>Your most liked posts</h3>

                </div>
            </div>
        )
    }
}