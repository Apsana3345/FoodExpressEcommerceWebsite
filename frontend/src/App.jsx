import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { RouteConstant } from "./constant/RouteConstant";
import SearchBar from "./components/SearchBar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  
  return(
   <div  >
<ToastContainer/>

<Layout>
<SearchBar/>
<Routes>

{RouteConstant.map((item) => (
          <Route path={item.path} element={<item.element/>} key={item.id} />
        ))}

</Routes>


</Layout>




   </div>
  )};

export default App;
