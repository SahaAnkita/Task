import "./App.css";
import EmployeeList from "./Components/EmployeeList";
import EmployeeContextProvider from "./contexts/EmployeeContext";

function App() {
  return (
    <EmployeeContextProvider>
      <EmployeeList />
    </EmployeeContextProvider>
  );
}

export default App;
