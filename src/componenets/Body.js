import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function Body() {
  const [items, setitems] = useState([]);

  useEffect(() => {
    axios
      .get("www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => {
        console.log(res.data);
        setitems(res.data.meals);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <div className="row"></div>;
}

export default Body;
