import { useState, useEffect } from 'react';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => setUsers(data))
        .catch((error) => console.error("Error fetching data", error))
    }, [])
    return (
        <ul>
                 {users.map((user) => (
                    <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    );
}

export default UserList;