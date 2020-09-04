import React from "react";
import Content from "./Content";
import { Provider } from "../state";
import { useSelector } from "react-redux";


 
const Category = () => {
   const [theme, setTheme] = React.useState({
       color: 'red'
   });
 
   const data = useSelector((state) => state.home);
   console.log(data);
 
   return (
       <>
           <Provider value={{
               color: 'green'
           }}>
              <Content/>
           </Provider>
       </>
   );
};
 
export default Category;