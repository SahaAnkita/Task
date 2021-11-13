/* eslint-disable */

import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createUserStart, updateUserStart } from "../redux/actions";
import { toast } from "react-toastify";
import Base64Image from "../utils/Base64Image";

const AddEditUser = () => {
  const [image, setNewImage] = useState();
  const [formValue, setFormValue] = useState({
    name: "",
    age: "",
    address: "",
    gender: "",
    about: "",
  });
  const { name, age, address, gender, about } = formValue;

  const [editMode, setEditMode] = useState(false);
  const { users } = useSelector((state) => state.data);
  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      setEditMode(true);
      const singleUser = users.find((item) => item.id === Number(id));
      setFormValue({ ...singleUser });
    } else {
      setEditMode(false);
      setFormValue({ ...formValue });
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && age && address && gender && about && image) {
      if (!editMode) {
        dispatch(createUserStart(formValue));
        toast.success("User Added Successfully");
        setTimeout(() => history.push("/"), 500);
      } else {
        dispatch(updateUserStart({ id, formValue }));
        setEditMode(false);
        toast.success("User Updated Successfully");
        setTimeout(() => history.push("/"), 500);
      }
    }
  };
  const onInputChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <p className="fs-2 fw-bold">
        {!editMode ? "Add User Detail" : "Update User Detail"}
      </p>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => onInputChange(e)}
          required
        />
        <br />
        <label htmlFor="age">Age</label>
        <input
          type="number"
          name="age"
          value={age}
          required
          onChange={(e) => onInputChange(e)}
        />
        <br />
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
        <br />
        <div name="gender" value={gender} onChange={(e) => onInputChange(e)}>
          <label htmlFor="gender">Gender</label>
          <input type="radio" id="male" name="gender" value="Male" />
          <label htmlFor="Male">Male</label>
          <input type="radio" id="female" name="gender" value="Female" />
          <label htmlFor="Female">Female</label>
        </div>
        <br />
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
      <br />
      <Button className="editbtn" variant="primary" type="submit">
        {!editMode ? "Add" : "Update"}
      </Button>
      <Button
        className="editbtn"
        variant="success"
        type="submit"
        onClick={() => history.push("/")}
      >
        Go Back
      </Button>
    </form>
  );
};

export default AddEditUser;
