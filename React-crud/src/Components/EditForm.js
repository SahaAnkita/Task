import { Button } from "react-bootstrap";
import { EmployeeContext } from '../contexts/EmployeeContext';
import { useContext, useState } from 'react';

const EditForm = ({ theEmployee }) => {

    const id = theEmployee.id;

    const [name, setName] = useState(theEmployee.name);
    const [age, setAge] = useState(theEmployee.age);
    const [address, setAddress] = useState(theEmployee.address);
    const [gender, setGender] = useState(theEmployee.gender);
    const [about, setAbout] = useState(theEmployee.about);
    const [image, setImage] = useState(theEmployee.image);

    const { updateEmployee } = useContext(EmployeeContext);
    const updatedEmployee = { id, name, age, address, gender, about }

    const onImageChange = async e => {
        setImage({ ...image, image: await convertBase64(e.target.files[0]) })
    }
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
    const handleSubmit = (e) => {
        e.preventDefault();
        updateEmployee(id, updatedEmployee)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div >
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    
                    placeholder="Name *"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <label htmlFor="age">Age</label>
                <input
                    type="number"
                    
                    placeholder="Age *"
                    name="age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    required
                />
                <label htmlFor="address">Address</label>
                <select  name="address" value={address} onChange={(e) => setAddress(e.target.value)}>
                    <option >Select your location</option>
                    <option >Chennai</option>
                    <option >Kolkata</option>
                    <option >Delhi</option>
                </select>
                <div  name="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
                    <label htmlFor="gender">Gender</label>
                    <input type="radio" id="male" name="gender" value="Male" />
                    <label htmlFor="Male">Male</label>
                    <input type="radio" id="female" name="gender" value="Female" />
                    <label htmlFor="Female">Female</label>
                </div>
                <label htmlFor="about">About</label>
                <input
                    type="text"
                    
                    placeholder="About *"
                    name="about"
                    value={about}
                    onChange={(e) => setAbout(e.target.value)}
                    required
                />
                <div >
                    <input type="file" multiple  name="image" id="file" onChange={e => onImageChange(e)} />
                </div>
            </div>

            <Button className="editbtn" variant="success" type="submit">Edit Employee</Button>
        </form>
    )
}
export default EditForm;