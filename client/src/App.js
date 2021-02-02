import React, { useEffect, useState } from "react";

function App() {
  const [api, setApi] = useState({});

  useEffect(() => {
    //fetch from /api
    fetch("/api")
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => {
        setApi({ ...data });
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <h3>
        Page: <a href={api.page}>/api</a>
      </h3>
      <h3>Application type: {api.type}</h3>
      <h3>Author: {api.author}</h3>
      <h6>Reference: [{api.reference}]</h6>
    </div>
  );
}

export default App;
