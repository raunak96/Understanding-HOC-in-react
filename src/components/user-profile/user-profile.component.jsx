import React from 'react';

export default class UserProfile extends React.Component {
    state={
        posts:[]
    };
    async componentDidMount() {
        console.log("mounted---Initial Posts length: ",this.state.posts.length);
        let result=await fetch("https://jsonplaceholder.typicode.com/posts")
        result= await result.json();
        this.setState({posts:result.slice(0,3)})

    }
    componentDidUpdate(){
        console.log("updated---Posts Length after Mounting and Setting State: ",this.state.posts.length);
    }
    render(){
        return(
            <div className="container">
                <h1>{this.props.name}</h1>
                <h2>{this.props.email}</h2>
                Posts:
                {
                    this.state.posts.map(post=>(
                        <div key={post.id} className="post">
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                        </div>
                    ))
                }
            </div>
        );
    }
} 