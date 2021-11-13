/* eslint-disable */

import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserStart, loadUsersStart } from "../redux/actions";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Home = () => {
  const dispatch = useDispatch();
  const { users, error } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(loadUsersStart());
  }, []);

  useEffect(() => error && toast.error(error), [error]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteUserStart(id));
      toast.success("User Deleted Successfully");
    }
  };
  return (
    <>
      <div>
        <Table responsive="sm">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Gender</th>
              <th>About</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.address}</td>
                  <td>{item.gender}</td>
                  <td>{item.about}</td>
                  <td>
                    <img className="profile-img" src={item.image} alt="" />
                  </td>
                  <td>
                    <Link
                      className="btn text-primary icon-btn"
                      to={`/editUser/${item.id}`}
                    >
                      <i className="material-icons">&#xE254;</i>
                    </Link>
                    <Link
                      onClick={() => handleDelete(item.id)}
                      className="btn text-danger icon-btn"
                    >
                      <i className="material-icons">&#xE872;</i>
                    </Link>
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
