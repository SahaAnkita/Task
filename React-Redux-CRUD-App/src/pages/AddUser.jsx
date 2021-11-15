/* eslint-disable */

import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../redux/actions";
import { toast } from "react-toastify";
import Base64Image from "../utils/Base64Image";

const AddEditUser = () => {
  const { users } = useSelector((state) => state.data);
  const [formValue, setFormValue] = useState({
    id: "",
    name: "",
    age: "",
    address: "",
    gender: "",
    about: "",
    image: "",
  });
  const { id, name, age, address, gender, about } = formValue;

  const history = useHistory();
  const dispatch = useDispatch();

  const onInputChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    setFormValue({ ...formValue, id: users.length + 1 });
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser(formValue));
    toast.success("User Added Successfully");
    history.push("/");
  };

  return (
    <>
      <div className="container">
        <form className="add-form" onSubmit={handleSubmit}>
          <h2>Add Form</h2>
          <div className="row">
            <div className="col-md-12 col-12">
              <div className="form-group">
                <div className="row">
                  <div className="col-md-2 col-2">
                    <label className="lbl" htmlFor="name">
                      Name:
                    </label>
                  </div>
                  <div className="col-md-10 col-10">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={name}
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12 col-12">
              <div className="form-group">
                <div className="row">
                  <div className="col-md-2 col-2">
                    <label className="lbl" htmlFor="age">
                      Age:
                    </label>
                  </div>
                  <div className="col-md-10 col-10">
                    <input
                      type="number"
                      className="form-control"
                      name="age"
                      value={age}
                      required
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12 col-12">
              <div className="form-group">
                <div className="row">
                  <div className="col-md-2 col-2">
                    <label className="lbl" htmlFor="address">
                      Address:
                    </label>
                  </div>
                  <div className="col-md-10 col-10">
                    <select
                      className="form-control"
                      name="address"
                      value={address}
                      onChange={(e) => onInputChange(e)}
                    >
                      <option>Select your location</option>
                      <option>Chennai</option>
                      <option>Kolkata</option>
                      <option>Delhi</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12 col-12">
              <div className="row">
                <div className="col-md-2 col-2">
                  <label className="lbl" htmlFor="gender">
                    Gender:
                  </label>
                </div>
                <div className="col-md-10 col-10">
                  <div
                    className="radio"
                    name="gender"
                    value={gender}
                    onChange={(e) => onInputChange(e)}
                  >
                    <input type="radio" id="male" name="gender" value="Male" />
                    <label>Male</label>
                    <input
                      type="radio"
                      id="female"
                      name="gender"
                      value="Female"
                    />
                    <label>Female</label>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12 col-12">
              <div className="form-group">
                <div className="row">
                  <div className="col-md-2 col-2">
                    <label className="lbl" htmlFor="">
                      About:
                    </label>
                  </div>
                  <div className="col-md-10 col-10">
                    <input
                      className="form-control"
                      type="text"
                      name="about"
                      value={about}
                      required
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-2">
              <label className="lbl" htmlFor="">
                Image:
              </label>
            </div>
            <div className="col-md-10 col-10">
              <Base64Image
                onChange={(e) => setFormValue({ ...formValue, image: e })}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Button className="editbtn" type="submit" class="btn btn-primary">
                Submit
              </Button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddEditUser;
