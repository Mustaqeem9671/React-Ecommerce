import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../Styles/ViewPage.model.css";

const ViewPage = ({ cart, setCart }) => {
  const { id } = useParams();
  const [info, setInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);

        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const data = await res.json();
        setInfo(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  const addToCart = () => {
    const isItemInCart = cart.some((item) => item.id === info.id);
    if (isItemInCart) {
      alert("item already in the cart");
    } else {
      setCart([...cart, info]);
      alert("item addedt to cart");
    }
  };

  return (
    <div className="viewdata">
      {info && (
        <>
          <div className="box1">
            <div className="pic" key={info.id}>
              <img src={`${info.thumbnail}`} alt="" />
            </div>
            <div className="content1">
              {/* <h2>Brand {info.brand}</h2> */}
              <h2>Name {info.title}</h2>
              <p> {info.description}</p>
              <p>
                <span>
                  {80 * info.price -
                    (80 * info.price * info.discountPercentage) / 100}
                </span>{" "}
                M.R.P:<del>{info.price * 80}</del> ({info.discountPercentage}%)
              </p>
            </div>
            <div className="back">
              <Link to="/">
                <button>Back</button>
              </Link>
              <Link>
                <button onClick={addToCart}>Cart</button>
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ViewPage;
