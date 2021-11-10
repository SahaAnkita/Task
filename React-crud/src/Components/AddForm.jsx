import { Button } from "react-bootstrap";
import { EmployeeContext } from "../contexts/EmployeeContext";
import { useContext, useState } from "react";
import Base64Image from "../utils/Base64Image";

const AddForm = () => {
  const { addEmployee } = useContext(EmployeeContext);

  const [image, setNewImage] = useState();
  const [newEmployee, setNewEmployee] = useState({
    name: "",
    age: "",
    address: "",
    gender: "",
    about: "",
  });

  const onInputChange = (e) => {
    setNewEmployee({ ...newEmployee, [e.target.name]: e.target.value });
  };

  const { name, age, address, gender, about } = newEmployee;

  const handleSubmit = (e) => {
    e.preventDefault();
    addEmployee(name, age, address, gender, about, image);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => onInputChange(e)}
          required
        />

        <label htmlFor="age">Age</label>
        <input
          type="number"
          name="age"
          value={age}
          required
          onChange={(e) => onInputChange(e)}
        />
        <label htmlFor="address">Address</label>
        <select
          name="address"
          value={address}
          onChange={(e) => onInputChange(e)}
        >
          <option>Select your location</option>
          <option>Chennai</option>
          <option>Kolkata</option>
          <option>Delhi</option>
        </select>
        <div name="gender" value={gender} onChange={(e) => onInputChange(e)}>
          <label htmlFor="gender">Gender</label>
          <input type="radio" id="male" name="gender" value="Male" />
          <label htmlFor="Male">Male</label>
          <input type="radio" id="female" name="gender" value="Female" />
          <label htmlFor="Female">Female</label>
        </div>
        <label htmlFor="">About</label>
        <input
          type="text"
          name="about"
          value={about}
          required
          onChange={(e) => onInputChange(e)}
        />
        <Base64Image onChange={(e) => setNewImage(e)} />
      </div>
      <Button className="editbtn" variant="success" type="submit">
        Add New Employee
      </Button>
    </form>
  );
};
export default AddForm;
