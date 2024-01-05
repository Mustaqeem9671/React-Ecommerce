import React, { useEffect, useState } from "react";
import "../Styles/Home.model.css";
import { Link } from "react-router-dom";

const Home = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`https://dummyjson.com/products`);
      const data = await res.json();
      setInfo(data.products);
      console.log(data.products);
    };
    fetchData();
  }, []);

  // const viewDetails = async () => {};

  return (
    <div className="home">
      {info.map((data) => (
        <>
          <div className="box">
            <div className="phone">
              <img src={data.thumbnail} alt="" />
            </div>
            <div className="content">
              {/* <h2>Brand {data.brand}</h2> */}
              <h2>{data.title}</h2>
              <p>{data.description}</p>
              <p>
                <span>
                  {80 * data.price -
                    (80 * data.price * data.discountPercentage) / 100}
                </span>{" "}
                M.R.P:<del>{data.price * 80}</del> ({data.discountPercentage}%)
              </p>
            </div>
            <div className="view">
              <Link to={`/view/${data.id}`}>
                <button>View</button>
              </Link>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default Home;
