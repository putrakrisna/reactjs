import React from "react";
import Content from "./Content";
import { Provider } from "../state";
import { useSelector } from "react-redux";
import List from "./List";

const Footer = () => {
  return <p>footer</p>;
};

const HomePage = () => {
  const [theme, setTheme] = React.useState({
    color: "red"
  });

  const data = useSelector((state) => state.home);
  console.log(data);
  return (
    <>
      <Provider
        value={{
          color: "green"
        }}
      >
        <div>
          <Content />
        </div>
      </Provider>
    </>
  );
};

export default HomePage;
