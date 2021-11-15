/* eslint-disable */

import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "../redux/actions";
import { toast } from "react-toastify";
import Base64Image from "../utils/Base64Image";

const EditForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();
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
  useEffect(() => {
    const singleUser = users.find((item) => item.id === parseInt(id));
    setFormValue({ ...singleUser, id });
  }, []);

  const handleChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };
  const handleImage = (e) => {
    setFormValue({ ...formValue, ["image"]: e });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editUser({ ...formValue }, id));
    toast.success("User Updated Successfully");
    history.push("/");
  };

  return (
    <>
      <div className="container">
        <form className="add-form" onSubmit={handleSubmit}>
          <h2>Edit Form</h2>
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
                      value={formValue.name}
                      onChange={handleChange}
                      required
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
                      value={formValue.age}
                      onChange={handleChange}
                      required
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
                      value={formValue.address}
                      onChange={handleChange}
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
                    value={formValue.gender}
                    onChange={handleChange}
                  >
                    <input
                      type="radio"
                      id="male"
                      name="gender"
                      value="Male"
                      checked={formValue.gender === "Male"}
                    />
                    <label>Male</label>
                    <input
                      type="radio"
                      id="female"
                      name="gender"
                      value="Female"
                      checked={formValue.gender === "Female"}
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
                      value={formValue.about}
                      onChange={handleChange}
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
              <img className="profile-img" src={formValue.image} />
              <Base64Image onChange={handleImage} />
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
export default EditForm;
