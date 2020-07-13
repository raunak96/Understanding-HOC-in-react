import React from "react";
import "./App.scss";
import UserProfile from "./components/user-profile/user-profile.component";
import UserList from "./components/user-list/user-list.component";

const App = () => (
    <div className="App">
        <UserList dataSource="https://jsonplaceholder.typicode.com/users"/>
        <UserProfile dataSource="https://jsonplaceholder.typicode.com/posts" name="Rawn" email="abc@gmail.com" />
    </div>
);

export default App;
