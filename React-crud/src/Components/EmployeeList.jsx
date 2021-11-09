import { Modal, Table } from 'react-bootstrap';
import { useContext, useState, useEffect } from "react";
import { EmployeeContext } from "../contexts/EmployeeContext";
import Employee from "./Employee";
import AddForm from "./AddForm";

const EmployeeList = () => {
    const { employees } = useContext(EmployeeContext);

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    useEffect(() => {
        handleClose()
    }, [employees])

    return (
        <>
            <div className="table-title">
                <div className="table-title-div">
                    <h2>Manage Employees</h2>
                </div>
                <div className="table-title-div">
                    <button onClick={handleShow} className="add-btn" ><i className="material-icons">&#xE147;</i> <span>Add New Employee</span></button>
                </div>
            </div>
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

                        {
                            employees.map((employee, index) => (
                                <tr key={employee.id}>
                                    <Employee employee={employee} />
                                </tr>
                            ))
                        }

                    </tbody>
                </Table>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Employee</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddForm />
                </Modal.Body>

            </Modal>
        </>
    )
}

export default EmployeeList;