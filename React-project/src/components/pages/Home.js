import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
    const [users, setUser] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);


    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3002/users");
        setUser(result.data.reverse());
    }

    const deleteUser = async id => {
        await axios.delete(`http://localhost:3002/users/${id}`);
        loadUsers();
    }
    return (
        <div className="container">
            <div className="py-4">
                <h1 className="text-center">Information</h1>
                <table className="table border shadow">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Age</th>
                            <th scope="col">Address</th>
                            <th scope="col">Gender</th>
                            <th scope="col">About</th>
                            <th scope="col">Image</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => (
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.age}</td>
                                    <td>{user.address}</td>
                                    <td>{user.gender}</td>
                                    <td>{user.about}</td>
                                    <td><img style={{height: 100, width: 100}} src={user.image} /></td>
                                    <td>
                                        <Link className="btn btn-primary mr-2" to={`/users/edit/${user.id}`}>Edit</Link>
                                        <Link className="btn btn-danger" onClick={() => deleteUser(user.id)}>Delete</Link>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Home;