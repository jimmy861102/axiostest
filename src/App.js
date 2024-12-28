import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => setData(response.data))
      .catch((error) => console.error("请求数据时出错：", error));
  }, []);

  return (
    <div>
      <h1>Axios 示例</h1>
      {data ? <p>{data.title}</p> : <p>加载中...</p>}
    </div>
  );
}

export default App;
