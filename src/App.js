import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [foodname, setFoodname] = useState("可頌");
  const [query, setQuery] = useState("可頌");
  const [employees, setEmployees] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getEmployees = async () => {
      try {
        const result = await axios.get(
          `https://data.fda.gov.tw/opendata/exportDataList.do?method=openData&InfoId=20&limit=20&樣品名稱=${query}&分析項分類=一般成分`
        );
        setEmployees(result.data);
        setError(null);
      } catch (error) {
        setError(error);
        setEmployees(null);
      }
    };
    getEmployees();
  }, [query]); // ← 當 query 改變才 fetch

  const handleSearch = () => {
    setQuery(foodname); // ← 點擊搜尋時才真正觸發查詢
  };

  return (
    <div>
      <h1>Axios 示例</h1>
      <h2>樣品名稱: {query}</h2>
      <input
        type="text"
        value={foodname}
        onChange={(e) => setFoodname(e.target.value)}
        name="foodname"
      />
      <button onClick={handleSearch}>搜尋</button>

      {error && <p style={{ color: "red" }}>錯誤: {error.message}</p>}
      {employees ? (
        <div>
          <h3>分析資料：</h3>
          <ul>
            {employees.map((item, index) => (
              <li key={index}>
                {item.樣品名稱} - {item.分析項} -每100克含量 {item.每100克含量}g
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>載入中...</p>
      )}
    </div>
  );
}

export default App;
