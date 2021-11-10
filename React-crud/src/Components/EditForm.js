/* eslint-disable */

import { Button } from "react-bootstrap";
import { EmployeeContext } from "../contexts/EmployeeContext";
import { useContext, useState, useEffect } from "react";
import Base64Image from "../utils/Base64Image";

const EditForm = ({ theEmployee }) => {
  const { updateEmployee } = useContext(EmployeeContext);
  const [employee, setEmployee] = useState({
    name: "",
    age: "",
    address: "",
    gender: "",
    about: "",
    image: "",
    id: "",
  });
  useEffect(() => {
    setEmployee(theEmployee);
  }, []);

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };
  const handleImage = (e) => {
    setEmployee({ ...employee, ["image"]: e });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateEmployee(employee.id, employee);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          placeholder="Name *"
          name="name"
          value={employee.name}
          onChange={handleChange}
          required
        />
        <label htmlFor="age">Age</label>
        <input
          type="number"
          placeholder="Age *"
          name="age"
          value={employee.age}
          onChange={handleChange}
          required
        />
        <label htmlFor="address">Address</label>
        <select name="address" value={employee.address} onChange={handleChange}>
          <option>Select your location</option>
          <option>Chennai</option>
          <option>Kolkata</option>
          <option>Delhi</option>
        </select>
        <div name="gender" value={employee.gender} onChange={handleChange}>
          <label htmlFor="gender">Gender</label>
          <input type="radio" id="male" name="gender" value="Male" />
          <label htmlFor="Male">Male</label>
          <input type="radio" id="female" name="gender" value="Female" />
          <label htmlFor="Female">Female</label>
        </div>
        <label htmlFor="about">About</label>
        <input
          type="text"
          placeholder="About"
          name="about"
          value={employee.about}
          onChange={handleChange}
          required
        />
        <Base64Image onChange={handleImage} />
      </div>

      <Button className="editbtn" variant="success" type="submit">
        Edit Employee
      </Button>
    </form>
  );
};
export default EditForm;
