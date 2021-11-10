import { useContext, useState, useEffect } from "react";
import { EmployeeContext } from "../contexts/EmployeeContext";
import { Modal } from "react-bootstrap";
import EditForm from "./EditForm";

const Employee = ({ employee }) => {
  const { deleteEmployee } = useContext(EmployeeContext);

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  useEffect(() => {
    handleClose();
  }, [employee]);

  return (
    <>
      <td>{employee.name}</td>
      <td>{employee.age}</td>
      <td>{employee.address}</td>
      <td>{employee.gender}</td>
      <td>{employee.about}</td>
      <td>
        <img className="profile-img" src={employee.image} alt="" />
      </td>
      <td>
        <button
          onClick={handleShow}
          className="btn text-warning icon-btn"
          data-toggle="modal"
        >
          <i className="material-icons">&#xE254;</i>
        </button>
        <button
          onClick={() => deleteEmployee(employee.id)}
          className="btn text-danger icon-btn"
          data-toggle="modal"
        >
          <i className="material-icons">&#xE872;</i>
        </button>
      </td>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Employee</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <EditForm theEmployee={employee} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Employee;
