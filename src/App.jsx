import { useEffect, useState } from "react";
import "./App.css";
import SkeletonLoader from "./Componets/SkeletonLoader";
import NestedCheck from "./Componets/NestedCheck";
import Firebase from "./Componets/Firebase";

function App() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // const getProducts = async () => {
  //   const res = await fetch("https://dummyjson.com/products?delay=5000");
  //   const data = await res.json();
  //   if (data.products) {
  //     setProducts(data.products);
  //   }
  // };

  // useEffect(() => {
  //   getProducts();
  // }, []);

  // console.log("products --.", products);
  return (
    <div
      style={{ display: "grid", gap: "48px", gridTemplateColumns: "1fr 1fr" }}
    >
      {/* <NestedCheck /> */}
      <Firebase />
      {/* <SkeletonLoader isLoading={true}>
        <div>
          {products?.map((item) => {
            return (
              <div
                key={item.title}
                style={{
                  width: "300px",
                  padding: "16px",
                  borderRadius: "8px",
                  border: "1px solid #ccc",
                  boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
                }}
              >
                <div
                  style={{
                    height: "150px",
                    width: "100%",
                    borderRadius: "4px",
                    backgroundColor: "#eee",
                  }}
                ></div>
                <h3 style={{ marginTop: "12px" }}>Title</h3>
                <p>Description goes here...</p>
              </div>
            );
          })}
        </div>
      </SkeletonLoader> */}
      {/* <SkeletonLoader isLoading={isLoading}>
        <ul style={{ padding: "16px", width: "200px" }}>
          {Array.from({ length: 0 }).map((_, i) => {
            return (
              <li
                style={{
                  padding: "8px",
                  borderBottom: "1px solid #ddd",
                  margin: "8px 0",
                }}
              >
                Item 1
              </li>
            );
          })}
        </ul>
      </SkeletonLoader>
      <SkeletonLoader isLoading={isLoading}>
        <div
          style={{
            width: "600px",
            padding: "12px",
            border: "1px solid black",
          }}
        >
          <div
            style={{
              height: "120px",
              width: "120px",
              borderRadius: "60px",
              border: "1px solid black",
            }}
          ></div>
        </div>
      </SkeletonLoader>
      <SkeletonLoader isLoading={isLoading}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div
            style={{
              height: "50px",
              width: "50px",
              borderRadius: "50%",
              backgroundColor: "#ddd",
            }}
          ></div>
          <div>
            <h4>User Name</h4>
            <p style={{ margin: 0, fontSize: "14px", color: "#555" }}>
              Subtitle
            </p>
          </div>
        </div>
      </SkeletonLoader> */}
    </div>
  );
}

export default App;
