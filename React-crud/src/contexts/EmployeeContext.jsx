import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export const EmployeeContext = createContext()

const EmployeeContextProvider = (props) => {
    const [employees, setEmployees] = useState([])

    const addEmployee = (name, age, address, gender, about, image) => {
        setEmployees([...employees, { id: uuidv4(), name, age, address, gender, about, image }])
    }
    const deleteEmployee = (id) => {
        setEmployees(employees.filter(employee => employee.id !== id))
    }

    const updateEmployee = (id, updatedEmployee) => {
        setEmployees(employees.map((employee) => employee.id === id ? updatedEmployee : employee))
    }
    return (
        <EmployeeContext.Provider value={{ employees, addEmployee, deleteEmployee, updateEmployee }}>
            {props.children}
        </EmployeeContext.Provider>
    )
}
export default EmployeeContextProvider;