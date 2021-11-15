/* eslint-disable */

import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { deleteUser } from "../redux/actions";
import { toast } from "react-toastify";

const Home = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { users, error } = useSelector((state) => state.data);

  useEffect(() => error && toast.error(error), [error]);

  const handleEdit = (id) => {
    history.push(`/editUser/${id}`);
  };
  const handleDelete = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteUser(id));
      toast.success("User Deleted Successfully");
    }
  };
  return (
    <>
      <div className="container">
        <br />
        <h2>Users Information</h2>
        <Table className="table-responsive" responsive="sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Address</th>
              <th>Gender</th>
              <th>About</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((data, i) => (
              <tr key={i}>
                <th>{data.id}</th>
                <td>{data.name}</td>
                <td>{data.age}</td>
                <td>{data.address}</td>
                <td>{data.gender}</td>
                <td>{data.about}</td>
                <td>
                  <img className="profile-img" src={data.image} alt="" />
                </td>
                <td>
                  <button className="btn text-warning btn btn-outline-warning" onClick={() => handleEdit(data.id)}>
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(data.id)}
                    className="btn text-danger btn-outline-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default Home;
