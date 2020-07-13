import React from 'react';

export default class UserList extends React.Component {
    state={
        users: []
    }
    async componentDidMount() {
        let result = await fetch("https://jsonplaceholder.typicode.com/users");
        result = await result.json();
        this.setState({ users: result.slice(0, 3) });
    }

    render() {
        return (
            <div className="container user-list">
                <h1>Users List</h1>
                {
                    this.state.users.map(user => (
                        <div key={user.id} className="user">
                            <h1>{user.name}</h1>
                            <h2>{user.email}</h2>
                        </div> 
                    ))
                }
            </div>
        )
    }
}