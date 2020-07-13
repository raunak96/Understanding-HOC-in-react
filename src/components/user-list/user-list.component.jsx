import React from "react";
import withData from "../../HOC/with-data";

const UserList = ({data}) => (
    <div className="container user-list">
        <h1>Users List</h1>
        {data.map((user) => (
            <div key={user.id} className="user">
                <h1>{user.name}</h1>
                <h2>{user.email}</h2>
            </div>
        ))}
    </div>
);

export default withData(UserList);