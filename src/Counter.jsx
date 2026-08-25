import React, { useEffect } from "react";

const Counter = ({ count, data }) => {
  useEffect(() => {
    console.log("mounted");
  }, []);

  useEffect(() => {
    console.log("updated");
  }, [data]);

  useEffect(() => {
    return () => {
      console.log("unmounted");
    };
  }, []);
  return (
    <div>
      <h2>{count}</h2>
      <h2>{data}</h2>
    </div>
  );
};

export default Counter;
