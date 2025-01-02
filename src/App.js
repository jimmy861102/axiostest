import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [employees, setEmployees] = useState(null);
  const [error, setError] = useState(null);
  const foodname = "可頌";
  useEffect(() => {
    const getEmployees = async () => {
      try {
        const result = await axios.get(
          `https://data.fda.gov.tw/opendata/exportDataList.do?method=openData&InfoId=20&limit=20&樣品名稱=${foodname}&分析項分類=一般成分`
        );
        setEmployees(result.data);
      } catch (error) {
        setError(error);
        if (error) return `Error: ${error.message}`;
      }
    };
    getEmployees();
  }, []);

  console.log(employees);

  return (
    <div>
      <h1>Axios 示例</h1>
      {employees ? <p>樣品名稱: {employees.openapi}</p> : <p>加载中...</p>}
    </div>
  );
}

export default App;
