import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {


  const [employees, setEmployees] = useState(null)
  const [error, setError] = useState(null)


  useEffect(() => {
    const getEmployees = async () => {
      try {
        const result = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
        setEmployees(result.data);
      } catch (error) {
        setError(error);
        if (error) return `Error: ${error.message}`;
      }
    }
    getEmployees();
  }, []);

console.log(employees);


  return (
    <div>
      <h1>Axios 示例</h1>
      <p>{employees.id}</p>
    </div>
  );
}

export default App;
