import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useHistory, useParams } from "react-router-dom";

const EditUser = () => {
    let history = useHistory();
    const { id } = useParams();
    const [user, setUser] = useState({
        name: "",
        age: "",
        address: "",
        gender: "",
        about: "",
        image: ""
    });

    const { name, age, address, gender, about, image } = user;
    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file)
            fileReader.onload = () => {
                resolve(fileReader.result);
            }
            fileReader.onerror = (error) => {
                reject(error);
            }
        })
    }
    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    const onImageChange = async e => {
        setUser({ ...user, image: await convertBase64(e.target.files[0]) })
    }
    useEffect(() => {
        loadUser();
    }, []);

    const onSubmit = async e => {
        e.preventDefault();
        await axios.put(`http://localhost:3002/users/${id}`, user);
        history.push("/");
    };

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3002/users/${id}`);
        setUser(result.data);
    }
    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Edit A User</h2>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <input type="text" className="form-control form-control-lg" placeholder="Enter Your Name" name="name" value={name} onChange={e => onInputChange(e)} />
                    </div>
                    <br />
                    <div className="form-group">
                        <input type="text" className="form-control form-control-lg" placeholder="Enter Your age" name="age" value={age} onChange={e => onInputChange(e)} />
                    </div>
                    <br />
                    <select className="form-group" name="address" value={address} onChange={e => onInputChange(e)}>
                        <option className="form-control">Select your location</option>
                        <option className="form-control">Chennai</option>
                        <option className="form-control">Kolkata</option>
                        <option className="form-control">Delhi</option>
                    </select>
                    <br />
                    <div className="form-group" name="gender" value={gender} onChange={e => onInputChange(e)}>
                        <input type="radio" id="male" name="gender" value="Male" />
                        <label for="html">Male</label>
                        <input type="radio" id="female" name="gender" value="Female" />
                        <label for="css">Female</label>
                    </div>
                    <br />
                    <div className="form-group">
                        <input type="text" className="form-control form-control-lg" placeholder="About" name="about" value={about} onChange={e => onInputChange(e)} />
                    </div>
                    <br />
                    <div className="form-group">
                        <input type="file" className="form-control form-control-lg" name="image" id="file" onChange={e => onImageChange(e)} />
                    </div>
                    <br />
                    <button className="btn btn-primary btn-block">Update User</button>
                </form>
            </div>
        </div>
    )
}
export default EditUser;